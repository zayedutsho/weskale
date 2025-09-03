import React from "react";
import Hero from "./components/Hero";
import heroBackground from "../assets/images/hero/Background.svg";
import Service from "./components/Service";
import Step from "./components/Step";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Partner from "./components/Partner";
import Network from "./components/Network";
import Meeting from "./components/Meeting";

const Home = () => {
  return (
    <div className="">
      {/* <img src={heroBackground} alt="" className="absolute top-0 left-0 z-0" /> */}
      <Hero />
      <Service />
      <div id="step-section">
        <Step />
      </div>
      <Faq />
      <Meeting />
      <Network />
      <Partner />
    </div>
  );
};

export default Home;
