import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import check from "../assets/service/check.svg";
import circle from "../assets/service/circle.svg";
import cpu from "../assets/service/cpu.svg";
import laptop1 from "../assets/service/laptop1.svg";
import laptop2 from "../assets/service/laptop2.svg";
import laptop3 from "../assets/service/laptop3.svg";
import pentool from "../assets/service/pentool.svg";
import people from "../assets/service/people.svg";
import tick from "../assets/service/tick.svg";
import Meeting from "./components/Meeting";
import Partner from "./components/Partner";

const services = [
  {
    id: 1,
    title: "Weskale BrandLab",
    icon: pentool,
    duration: "Approx. 3-6 Weeks",
    points: [
      "Video Production (ads, interviews, reels, TikTok, YouTube Ads, motion design)",
      "UGC (User Generated Content) created by real creators for authenticity",
      "Graphic Design (social media posts, carousels … )",
      "Video Editing (short-form & long-form content)",
      "Complete Visual Identity (logo, brand guidelines, graphic charter)",
      "Storytelling & Brand Positioning",
      "Rebranding & Brand Repositioning",
    ],
    laptop: laptop1,
  },
  {
    id: 2,
    title: "Weskale Digital",
    icon: cpu,
    duration: "Approx. 4-8 Weeks",
    points: [
      "Social Media Advertising",
      "Email & SMS Marketing",
      "Analytics & Reporting (Google Analytics, custom dashboards, KPI tracking)",
      "Lead Generation",
      "Website Development",
      "E-commerce Stores",
      "Landing Pages",
      "Mobile Applications (iOS & Android apps)",
      "Web Applications (custom web apps for business & users)",
      "Landing Pages",
      "Maintenance & Security (updates, support, hosting)",
      "SEO & Technical Optimization (on-page SEO, Core Web Vitals, mobile-first design)",
    ],
    laptop: laptop2,
  },
  {
    id: 3,
    title: "Weskale Influence",
    icon: people,
    duration: "Approx. 3-6 Weeks",
    points: [
      "Influencer Campaigns",
      "Page Placements on high-visibility accounts",
      "Brand Ambassadors",
      "Affiliate & Referral Programs",
      "Social PR (digital press & strategic collaborations)",
    ],
    laptop: laptop3,
  },
];

const tools = [
  {
    id: 1,
    title: "Seamless Integration",
    description:
      "We connect branding, digital marketing, and \ninfluence into one powerful ecosystem, ensuring \nevery campaign flows smoothly from strategy to \nexecution.",
  },
  {
    id: 2,
    title: "Smart Automation",
    description:
      "Automate your campaigns with cutting-edge \ntools that save time, improve efficiency, \nand maximize ROI.",
  },
  {
    id: 3,
    title: "Top-notch Security",
    description:
      "We ensure your data and campaigns \nare protected with enterprise-grade \nsecurity and compliance standards.",
  },
];

const Service = () => {
  const [activeService, setActiveService] = useState(services[0]);
  const [active, setActive] = useState(tools[0].id);
  const toggle = (id) => {
    setActive(active === id ? null : id);
  };
  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2.8, ease: "easeOut" },
    },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1 }); // pop-up animation
    }
  }, [controls, inView]);
  return (
    <div>
      <div className="px-4 lg:px-0 lg:max-w-[1050px] 3xl:max-w-[1250px] mx-auto mt-[80px] lg:mt-[150px] 3xl:mt-[200px] flex flex-col items-start">
        {/* Heading */}
        <div>
          <motion.h1
            className="text-[34px] lg:text-[50px] 3xl:text-[56px] text-white font-grotesk"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            Services We{" "}
            <span className="font-playfair italic text-[#1F48FF] text-[36px] lg:text-[52px] 3xl:text-[60px]">
              Offer
            </span>
          </motion.h1>

          {/* P (desktop) fade-in down */}
          <motion.p
            className="text-[#ACA7C8] text-lg leading-[30px] font-roboto hidden lg:block"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: 0.2,
            }}
            viewport={{ once: true }}
          >
            At Weskale, we connect creativity, performance and influence to{" "}
            <br />
            craft solutions that make brands stand out. Because true growth{" "}
            <br />
            happens when we grow as one
          </motion.p>

          {/* P (mobile) fade-in down */}
          <motion.p
            className="text-[#ACA7C8] lg:text-lg leading-[28px] font-roboto lg:hidden mt-1 lg:mt-0"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: 0.3,
            }}
            viewport={{ once: true }}
          >
            At Weskale, we connect creativity, performance and influence to
            craft solutions that make brands stand out. Because true growth
            happens when we grow as one
          </motion.p>
        </div>

        {/* Services List + Details */}
        <div className="mt-[40px] lg:mt-[100px] flex flex-col lg:flex-row items-start lg:gap-[200px] 3xl:gap-[210px]">
          {/* Left Side - Service Titles */}
          <div className="font-grotesk">
            {services.map((service, idx) => (
              <div key={service.id}>
                <h1
                  onClick={() => setActiveService(service)}
                  className={`cursor-pointer text-[28px] relative z-10 ${
                    activeService.id === service.id
                      ? "text-white"
                      : "text-[#ACA7C8]"
                  }`}
                >
                  <span className="text-[16px] lg:text-[20px]">
                    {String(idx + 1).padStart(2, "0")} &nbsp;
                  </span>
                  {service.title}
                </h1>
                <hr className="lg:w-[450px] 3xl:w-[493px] border-[#ACA7C880] opacity-[50%] my-[12px] lg:my-[32px]" />
              </div>
            ))}
          </div>

          {/* Right Side - Active Service Details */}
          <div className="mt-4 lg:mt-0">
            <div className="hidden lg:block">
              <img src={activeService.icon} alt={activeService.title} />
              <div className="lg:mt-[32px] 3xl:mt-[47px]">
                <h1 className="text-white font-grotesk lg:text-[36px] 3xl:text-[48px]">
                  {activeService.title}
                </h1>
                <h1 className="text-[#ACA7C8] font-grotesk text-[20px] font-medium">
                  {activeService.duration}
                </h1>
              </div>
            </div>
            <div className="flex gap-4 lg:hidden">
              <img src={activeService.icon} alt={activeService.title} />
              <div className="lg:mt-[32px] 3xl:mt-[47px]">
                <h1 className="text-white font-grotesk lg:text-[36px] 3xl:text-[48px] mt-2">
                  {activeService.title}
                </h1>
                <h1 className="text-[#ACA7C8] font-grotesk text-[20px] font-medium">
                  {activeService.duration}
                </h1>
              </div>
            </div>

            <div className="mt-8 lg:mt-[47px] flex flex-col gap-[16px]">
              {activeService.points.map((point, i) => (
                <div key={i} className="flex items-start gap-[24px]">
                  <img src={tick} alt="tick" className="mt-1" />
                  <h1 className="text-[#ACA7C8] font-grotesk text-[14px] lg:text-[18px] leading-[25px] lg:leading-[30px]">
                    {point}
                  </h1>
                </div>
              ))}
            </div>

            <img
              src={activeService.laptop}
              alt="laptop"
              className="mt-[24px] lg:mt-[40px]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-[50px] lg:gap-[200px] 3xl:gap-[300px] my-[40px] lg:my-[100px] 3xl:my-[150px]">
        <div className="">
          {/* Title */}
          <motion.h2
            className="hidden lg:block lg:text-[50px] 3xl:text-[56px] text-white font-grotesk leading-[64px]"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Our Tools & <br />
            <span className="font-playfair italic text-[#1F48FF] lg:text-[52px] 3xl:text-[60px]">
              Technology
            </span>
          </motion.h2>

          <motion.h2
            className="text-[32px] lg:hidden lg:text-[50px] 3xl:text-[56px] text-white font-grotesk leading-[64px]"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Our Tools &nbsp;
            <span className="font-playfair italic text-[#1F48FF] text-[34px] lg:text-[52px] 3xl:text-[60px]">
              Technology
            </span>
          </motion.h2>

          {/* Tools List */}
          <div className="mt-4 lg:mt-10 space-y-6">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="cursor-pointer"
                onClick={() => toggle(tool.id)}
              >
                {/* Header */}
                <div className="flex items-center gap-5">
                  <img src={check} alt="tick" className="w-5 h-5" />
                  <h3
                    className={`text-lg font-medium ${
                      active === tool.id ? "text-white" : "text-white"
                    }`}
                  >
                    {tool.title}
                  </h3>
                </div>

                {/* Expandable Description */}
                {active === tool.id && (
                  <p className="mt-3 ml-8 text-[#ACA7C8] text-sm leading-relaxed whitespace-pre-line">
                    {tool.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="mt-8 lg:mt-10 bg-gradient-to-b from-[#846EFF] to-[#1F48FF] px-6 py-3 rounded-lg text-white font-semibold shadow-lg">
            <Link to="/contact-us">CONTACT US</Link>
          </button>
        </div>
        <motion.img
          src={circle}
          alt="Circle"
          className="w-[300px] lg:w-[452px] 3xl:w-[552px] mb-8 lg:mb-0"
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          animate={{ rotate: 360 }}
          transition={{
            rotate: { repeat: Infinity, duration: 10, ease: "linear" },
          }}
        />
        ){/* <Orbit /> */}
      </div>

      {/* Bottom Sections */}
      <div>
        <Meeting />
        <Partner />
      </div>
      {/* <div className="flex justify-center items-center text-white w-[500px] h-[500px] ">
        <OrbitingCircles>🌕</OrbitingCircles>
        <OrbitingCircles>🌕</OrbitingCircles>
      </div> */}
    </div>
  );
};

export default Service;
