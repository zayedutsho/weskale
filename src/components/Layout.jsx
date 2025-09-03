import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "./../fonts.css";
import Footer from "./Footer";
import heroBackground from "../assets/images/hero/Background.svg";
import ScrollToTop from "../pages/components/ScrollToTop";

const Layout = () => {
  return (
    // style={{background: "linear-gradient(249deg, #CFCFCF 0%, #EFEFEF 49.4%, #CFCFCF 98.81%)"}}
    <div className="min-h-screen flex flex-col">
      <img src={heroBackground} alt="" className="absolute top-0 left-0 z-0" />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
