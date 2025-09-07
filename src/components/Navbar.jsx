import { Menu, X } from "lucide-react"; // hamburger & close icons
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logos/logo.svg";
import NetworkPopup from "../pages/components/NetworkPopup";

const useScrollNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navigateWithScroll = (path) => {
    if (location.pathname === path) {
      scrollToTop();
    } else {
      navigate(path);
    }
  };

  const navigateToSection = (sectionId, path = "/") => {
    if (location.pathname === "/" || location.pathname === "/home") {
      let targetId =
        sectionId === "process" ? "step-section" : `${sectionId}-section`;
      scrollToSection(targetId);
    } else {
      navigate(`${path}#${sectionId}`);
    }
  };

  return { navigateWithScroll, navigateToSection, scrollToTop };
};

const Navbar = () => {
  const [showNetwork, setShowNetwork] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { navigateWithScroll, navigateToSection } = useScrollNavigation();

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.substring(1);
      setTimeout(() => {
        let element =
          hash === "process"
            ? document.getElementById("step-section")
            : document.getElementById(`${hash}-section`);
        if (element)
          element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [location]);

  // prevent scroll when menu is open
  useEffect(() => {
    if (showNetwork) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showNetwork]);

  const getNavItemClasses = (path) => {
    const isActive = location.pathname === path;
    return `cursor-pointer transition-all duration-200 ${
      isActive
        ? "text-blue-300 border-b-2 border-blue-300"
        : "font-normal hover:text-blue-200"
    }`;
  };

  const navItems = [
    { label: "HOME", onClick: () => navigateWithScroll("/"), path: "/" },
    {
      label: "OUR PROCESS",
      onClick: () => navigateToSection("process", "/"),
      path: "/#process",
    },
    {
      label: "OUR SERVICES",
      onClick: () => navigateWithScroll("/our-service"),
      path: "/our-service",
    },
    {
      label: "OUR SOLUTIONS",
      onClick: () => navigateWithScroll("/our-solution"),
      path: "/our-solution",
    },
    {
      label: "CONTACT US",
      onClick: () => navigateWithScroll("/contact-us"),
      path: "/contact-us",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mx-auto lg:mt-[24px] backdrop-blur-md">
      <div className="flex items-center justify-between lg:justify-center p-4 lg:p-0">
        {/* Logo */}
        <div onClick={() => navigateWithScroll("/")}>
          <img
            src={logo}
            alt="logo"
            className="lg:w-[164] lg:h-[35px] lg:mr-[100px] 3xl:mr-[220px] cursor-pointer"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center text-white text-[14px] gap-[20px] 3xl:gap-[40px] font-grotesk font-normal">
          {navItems.map((item) => (
            <h1
              key={item.label}
              className={getNavItemClasses(item.path)}
              onClick={item.onClick}
            >
              {item.label}
            </h1>
          ))}
          <div
            onClick={() => {
              setShowNetwork(true);
            }}
          >
            <div className="cursor-pointer bg-gradient-to-b from-[#846EFF] to-[#1F48FF] flex items-center justify-center ml-[40px] w-[160px] lg:w-[207px] h-[40px] lg:h-[42px] border-2 border-t-[#a799f6] border-l-[#9a8de8] border-r-[#9a8de8] border-b-[#6a83f6] rounded-[10px] text-white font-grotesk font-medium">
              JOIN OUR NETWORK
            </div>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center ">
          <button onClick={() => setMenuOpen(true)}>
            <Menu size={28} className="text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%]  bg-transparent text-white z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <button onClick={() => setMenuOpen(false)}>
            <X size={28} className="text-white" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col p-6 space-y-6 bg-gradient-to-b from-[#110C5E]  to-[#110F1D] h-screen">
          {navItems.map((item) => (
            <h1
              key={item.label}
              className="text-lg font-medium cursor-pointer hover:text-blue-400"
              onClick={() => {
                item.onClick();
                setMenuOpen(false);
              }}
            >
              {item.label}
            </h1>
          ))}
          <div
            onClick={() => {
              setShowNetwork(true);
              setMenuOpen(false);
            }}
          >
            <div className="cursor-pointer bg-gradient-to-b from-[#846EFF] to-[#1F48FF] flex items-center justify-center w-[200px] h-[42px] border-2 border-t-[#a799f6] border-l-[#9a8de8] border-r-[#9a8de8] border-b-[#6a83f6] rounded-[10px] text-white font-grotesk font-medium">
              JOIN OUR NETWORK
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
      {showNetwork && <NetworkPopup onClose={() => setShowNetwork(false)} />}
    </nav>
  );
};

export default Navbar;
