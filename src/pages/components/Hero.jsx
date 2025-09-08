import { motion } from "framer-motion";
import calendarIcon from "../../assets/images/hero/calendarIcon.svg";
import heroVideo from "../../assets/video/hero.gif";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const revealContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const revealItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <div className="lg:ml-[100px] 3xl:ml-[130px] lg:text-[56px] 3xl:text-[60px] font-roboto mt-[120px] lg:mt-[140px] 3xl:mt-[170px]">
      <div className="p-4 lg:p-0 flex flex-col-reverse lg:flex-row items-center justify-center gap-[50px] lg:gap-[100px]">
        {/* LEFT CONTENT */}
        <div>
          {/* Large Screen Title */}
          {/* Large Screen Title */}
          {/* Large Screen Title */}
          <motion.h1
            variants={revealContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden  relative   lg:block font-grotesk font-medium text-white text-left lg:leading-[55px] 3xl:leading-[75px]"
          >
            <motion.span variants={revealItem} className="inline-block">
              Weskale Is Where
            </motion.span>
            <br />
            <motion.span variants={revealItem} className="inline-block">
              Your Brand's Next Big{" "}
            </motion.span>
            <span className="font-playfair text-[#1F48FF] italic">
              {/* <br />
              <motion.span variants={revealItem} className="inline-block">
                Next Big
              </motion.span> */}
              <br />
              <motion.span variants={revealItem} className="inline-block">
                Chapter
              </motion.span>
            </span>{" "}
            <motion.span variants={revealItem} className="inline-block">
              Begins
            </motion.span>
          </motion.h1>

          {/* Mobile Title */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[32px] lg:hidden font-grotesk font-medium text-white text-left leading-[40px]"
          >
            Weskale Is Where Your Brand's{" "}
            <span className="font-playfair text-[#1F48FF] italic">
              Next Big Chapter
            </span>{" "}
            Begins
          </motion.h1>

          {/* Subtext */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden lg:flex  font-roboto text-[#ACA7C8] text-[14px] 3xl:text-[18px] mt-4 lg:mt-[30px]"
          >
            <h1>
              Weskale BrandLab <span className="mx-[16px]">·</span>
            </h1>
            <h1>
              Weskale Digital <span className="mx-[16px]">·</span>
            </h1>
            <h1>Weskale Influence</h1>
          </motion.div>

          {/* Mobile Subtext */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-2 lg:hidden font-roboto text-[#ACA7C8] text-[16px] 3xl:text-[18px] mt-8 lg:mt-[30px]"
          >
            <h1>
              <span className="mx-[16px]">·</span> Weskale BrandLab
            </h1>
            <h1>
              <span className="mx-[16px]">·</span> Weskale Digital
            </h1>
            <h1>
              <span className="mx-[16px]">·</span> Weskale Influence
            </h1>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="z-10 relative mt-8 lg:mt-0 "
          >
            <motion.h1
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 bg-white lg:mt-[45px] cursor-pointer flex items-center justify-center rounded-[10px] lg:w-[300px] 3xl:w-[320px] h-[42px] 3xl:h-[54px] capitalize text-[14px] text-[#0F0622] shadow-md transition-all duration-300 
             hover:bg-[linear-gradient(180deg,#846EFF_0%,#1F48FF_108.33%)] hover:text-white"
            >
              <a
                href="https://calendly.com/contact-weskaleagency/30min?"
                target="_blank"
                className="w-full h-full flex items-center justify-center text-black font-semibold shadow-lg"
              >
                BOOK YOUR FREE MARKETING AUDIT
              </a>
            </motion.h1>
          </motion.div>
        </div>

        {/* RIGHT CONTENT */}

        <motion.div className="">
          {/* Animate only the hero image */}
          <motion.img
            src={heroVideo}
            alt=""
            className="lg:w-[500px] 3xl:w-[746px]"
            // initial={{ opacity: 0, scale: 0.8 }}
            // whileInView={{ opacity: 1, scale: 1 }}
            // transition={{
            //   duration: 1.2,
            //   ease: "easeOut",
            // }}
            // viewport={{ once: true }}
          />

          <a
            href="https://calendly.com/contact-weskaleagency/30min?"
            target="_blank"
            className="w-full h-full flex items-center justify-center"
          >
            <img
              src={calendarIcon}
              alt=""
              className="absolute right-[56px] cursor-pointer hidden lg:block"
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
