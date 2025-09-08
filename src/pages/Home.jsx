import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Meeting from "./components/Meeting";
import Network from "./components/Network";
import Partner from "./components/Partner";
import Service from "./components/Service";
import Step from "./components/Step";

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
