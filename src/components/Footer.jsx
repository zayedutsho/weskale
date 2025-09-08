import { useState } from "react";
import { Link } from "react-router-dom";
import bg from "../assets/images/footer/background.svg";
import discord from "../assets/images/footer/discord.svg";
import fb from "../assets/images/footer/fb.svg";
import insta from "../assets/images/footer/insta.svg";
import x from "../assets/images/footer/x.svg";
import logo from "../assets/logos/logo.svg";
import PopupFooter from "../pages/components/PopupFooter";

const Footer = () => {
  const [showNetwork, setShowNetwork] = useState(false);
  return (
    <footer>
      <hr className="border-[#fff] opacity-[20%] mt-10 lg:mt-0" />
      <div className="p-4 lg:p-0 3xl:max-w-[1920px] mx-auto lg:flex items-center justify-center pt-10 lg:pt-[65px] border-t-indigo-500 lg:gap-[160px] 3xl:gap-[258px]">
        <div>
          <img src={logo} alt="logo" />
          <h1 className="hidden lg:block font-roboto text-[16px] text-[#ACA7C8] mt-3 lg:mt-[24px]">
            Driving brands forward with creativity, <br /> influence and
            digital expertise.
          </h1>
          <h1 className="lg:hidden font-roboto text-[16px] text-[#ACA7C8] mt-3 lg:mt-[24px]">
            Driving brands forward with creativity, influence and
            digital expertise.
          </h1>
          <h1
            className="cursor-pointer font-grotesk text-[14px] text-[#1F48FF] my-[24px] lg:my-[64px]"
            onClick={() => setShowNetwork(true)}
          >
            JOIN OUR CREATOR NETWORK
          </h1>
        </div>
        <div className="mb-6 lg:mb-[60px]">
          <h1 className="font-grotesk text-[18px] text-white font-semibold mb-4 lg:mb-[48px]">
            LINKS
          </h1>
          <div className="font-roboto flex items-start justify-start text-[#ACA7C8] gap-[60px] 3xl:gap-[100px] relative z-10">
            <div className="flex flex-col gap-3 lg:gap-[24px]">
              <Link to="/">
                <h1>Home</h1>
              </Link>
              <Link to="/#process">
                <h1>Our Process</h1>
              </Link>
              <Link to="/our-service">
                <h1>Our Services</h1>
              </Link>
            </div>
            <div className="flex flex-col gap-3 lg:gap-[24px]">
              <Link to="/our-solution">
                <h1>Packages</h1>
              </Link>
              <h1
                className="cursor-pointer"
                onClick={() => setShowNetwork(true)}
              >
                Join Our Network
              </h1>
            </div>
          </div>
        </div>
        <div className="mb-8 lg:mb-[75px] relative z-10">
          <h1 className="font-grotesk text-[18px] text-white font-semibold mb-4 lg:mb-[25px]">
            CONTACT
          </h1>
          <div className="font-roboto flex flex-col gap-3 lg:gap-[20px] text-[#ACA7C8]">
            <h1>contact@weskaleagency.com</h1>
            <h1>What’sApp:+971581739962 </h1>
            <div className="flex items-center justify-center gap-[16px] mt-6 lg:mt-0">
              <img
                src={discord}
                alt=""
                className="z-10 relative cursor-pointer"
              />
              <img src={x} alt="" className="z-10 relative cursor-pointer" />
              <img
                src={insta}
                alt=""
                className="z-10 relative cursor-pointer"
              />
              <img src={fb} alt="" className="z-10 relative cursor-pointer" />
            </div>
          </div>
        </div>
        <img src={bg} alt="" className="absolute right-0 z-0 hidden lg:block" />
      </div>
      <hr className="lg:max-w-[1100px] 3xl:max-w-[1350px] mx-auto border-[#fff] opacity-[20%]" />
      <img
        src={bg}
        alt=""
        className="absolute right-0 z-0 h-[120px] lg:hidden"
      />
      <div className="relative z-10 p-4 lg:p-0 text-[#ACA7C8] font-roboto text-[16px] mt-3 lg:mt-[24px] lg:max-w-[1100px] 3xl:max-w-[1350px] mx-auto flex flex-col-reverse lg:flex-row items-center lg:justify-between">
        <h1 className="mt-4 lg:mt-0">
          © 2025 Weskale Agency. All rights reserved.
        </h1>
        {/* <div className="flex items-center justify-center gap-6">
          <h1>Terms of Service</h1>
          <h1>Privacy Policy</h1>
        </div> */}
        <div className="flex items-center justify-center gap-6">
          <Link to="/terms" className="text-white hover:underline">
            Terms of Service
          </Link>
          <Link to="/privacy" className="text-white hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>

      {showNetwork && <PopupFooter onClose={() => setShowNetwork(false)} />}
    </footer>
  );
};

export default Footer;
