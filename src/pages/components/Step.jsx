import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    id: 1,
    title: "STEP 1",
    heading: "DISCOVERY & AUDIT",
    content: {
      objective:
        "Understand your brand, your audience, and your goals with precision.",
      whatWeDo:
        "We conduct a full audit of your digital presence, study the market and competitors, and define clear objectives aligned with your ambitions.",
      whatYouReceive:
        "A detailed diagnosis and a sharp understanding of where your brand stands and where it can grow.",
    },
  },
  {
    id: 2,
    title: "STEP 2",
    heading: "STRATEGY & ROADMAP",
    content: {
      objective: "Build a tailored strategy based on your unique needs.",
      whatWeDo:
        "From brand positioning to content planning, we design a strategy adapted to your goals  whether digital marketing, influence, or both.",
      whatYouReceive:
        "A structured action plan that aligns with your objectives and sets the stage for impactful execution.",
    },
  },
  {
    id: 3,
    title: "STEP 3",
    heading: "CREATION & EXECUTION",
    content: {
      objective:
        "Activate the strategy with creative campaigns built to perform.",
      whatWeDo:
        "We launch campaigns tailored to each client’s needs  whether that means digital marketing, influence marketing, or a mix of both. We create the right content, activate the right channels, and manage every detail to ensure smooth and effective execution.",
      whatYouReceive:
        "Campaigns that connect with your audience, deliver results, and reflect your brand’s vision.",
    },
  },
  {
    id: 4,
    title: "STEP 4",
    heading: "ANALYSIS & GROWTH",
    content: {
      objective: "Measure, optimize, and prepare for scalable growth.",
      whatWeDo:
        "We track performance, identify strengths and weaknesses, and refine campaigns with data-driven insights.",
      whatYouReceive:
        "Clear reports, continuous improvement, and strategies ready to scale.",
    },
  },
];

const Step = () => {
  const [activeStep, setActiveStep] = useState(1);
  return (
    <div className="my-[40px] lg:my-0 flex items-center justify-center mx-auto">
      <section className="text-white lg:py-[80px] 3xl:py-[150px] px-6 flex flex-col items-start">
        {/* Title */}
        <motion.h2
          className="font-medium mb-4 lg:mb-12 text-left text-[32px] lg:text-[50px] 3xl:text-[56px]"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our 4-Step{" "}
          <span className="text-blue-500 italic font-playfair text-[34px] lg:text-[52px] 3xl:text-[60px]">
            Process
          </span>
        </motion.h2>

        {/* Steps Container */}
        <div className="flex flex-col lg:flex-row gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              onMouseEnter={() => setActiveStep(step.id)}
              className={`cursor-pointer transition-all duration-300 
        ${
          activeStep === step.id
            ? "lg:w-[550px] 3xl:w-[668px]"
            : "lg:w-[150px] 3xl:w-[207px]"
        }
        flex flex-col justify-center items-center 
        rounded-[24px] overflow-hidden ${
          activeStep === step.id ? "rounded-[24px]" : "bg-[#1F48FF]"
        } 
      `}
            >
              {/* Step Label */}
              <div
                className={`text-[24px] py-[2px] lg:py-0 lg:text-[42px] 3xl:text-[60px] font-grotesk text-center font-medium lg:-rotate-90 
          ${activeStep === step.id ? "hidden" : "block"} 
        `}
              >
                {step.title}
              </div>

              {/* Expanded Content */}
              {activeStep === step.id && (
                <div className="w-[full] h-[480px] lg:h-[550px] 3xl:h-[700px] px-[24px] lg:px-[40px] py-[24px] lg:py-[35px] 3xl:py-[64px] text-left bg-gradient-to-b from-[#110C5E] to-[#110F1D]">
                  <p className="text-[16px] text-white mb-2">{step.title}</p>
                  <h3 className="lg:text-[24px] 3xl:text-[42px] font-medium mb-2 lg:mb-4 3xl:mb-6">
                    {step.heading}
                  </h3>
                  <hr className="border-[#7f7f7f]" />
                  <div className="space-y-4 text-sm leading-relaxed mt-2 lg:mt-4 3xl:mt-6">
                    <div>
                      <strong className="lg:text-[14px] 3xl:text-[18px] font-semibold font-roboto">
                        OBJECTIVE: <br />
                      </strong>{" "}
                      <h1 className="mt-2 lg:mt-[8px] 3xl:mt-[16px] text-[14px] lg:text-[16px] font-regular font-roboto">
                        {step.content.objective}
                      </h1>
                    </div>
                    <div>
                      <strong className="lg:text-[14px] 3xl:text-[18px] font-semibold font-roboto">
                        WHAT WE DO: <br />
                      </strong>{" "}
                      <h1 className="mt-2 lg:mt-[8px] 3xl:mt-[16px] text-[14px] lg:text-[16px] font-regular font-roboto">
                        {step.content.whatWeDo}
                      </h1>
                    </div>
                    <div>
                      <strong className="lg:text-[14px] 3xl:text-[18px] font-semibold font-roboto">
                        WHAT YOU RECEIVE: <br />
                      </strong>{" "}
                      <h1 className="mt-2 lg:mt-[8px] 3xl:mt-[16px] text-[14px] lg:text-[16px] font-regular font-roboto">
                        {step.content.whatYouReceive}
                      </h1>
                    </div>
                  </div>

                  <button className="mt-4 lg:mt-[35px] 3xl:mt-[76px] w-[150px] 3xl:w-[200px] h-[42px] lg:h-[45px] 3xl:h-[54px] rounded-[10px] bg-gradient-to-b from-[#846EFF] to-[#1F48FF] text-sm font-medium">
                    <a
                      href="https://calendly.com/contact-weskaleagency/30min?"
                      target="_blank"
                      className="w-full h-full flex items-center justify-center"
                    >
                      LET'S SKALE
                    </a>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Step;
