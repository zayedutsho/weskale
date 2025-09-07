import { motion } from "framer-motion";
import s1 from "../../assets/images/service/serviceOne.svg";
import s3 from "../../assets/images/service/serviceThree.svg";
import s2 from "../../assets/images/service/serviceTwo.svg";

const Service = () => {
  return (
    <div className="py-10 bg-[#1A1921] lg:flex items-center justify-center lg:py-[80px] 3xl:py-[156px] mt-[60px] lg:mt-[120px] text-center">
      <div>
        <div className="px-4 lg:px-0">
          {/* <h1 className="text-[32px] lg:text-[50px] 3xl:text-[56px] text-white font-grotesk">
            Services We{" "}
            <span className="font-playfair italic text-[#1F48FF] text-[34px] lg:text-[52px] 3xl:text-[60px]">
              Offer
            </span>
          </h1> */}
          <motion.h1
            className="text-[32px] lg:text-[50px] 3xl:text-[56px] text-white font-grotesk"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            viewport={{ once: true }} // animates only once
          >
            Services We{" "}
            <span className="font-playfair italic text-[#1F48FF] text-[34px] lg:text-[52px] 3xl:text-[60px]">
              Offer
            </span>
          </motion.h1>
        </div>

        {/* <TextReveal>Magic UI will change the way you design.</TextReveal> */}
        <motion.h1
          className=" text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Explore our services to boost your online presence and drive growth,
          from web <br /> design, development to SEO and digital marketing.
        </motion.h1>

        <motion.h1
          className="px-4 lg:px-0 mt-4 lg:mt-[25px] text-[14px] lg:text-[18px] text-[#ACA7C8] font-roboto leading-[25px] lg:hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Explore our services to boost your online presence and drive growth,
          from web design, development to SEO and digital marketing.
        </motion.h1>
        <div className="px-4 lg:pl-0 flex gap-[24px] mt-[40px] lg:mt-[64px] text-left text-white overflow-x-auto whitespace-nowrap no-scrollbar lg:overflow-hidden">
          <div className="cursor-pointer w-[322px] h-[280px] lg:h-[322px] p-[40px] bg-[#201D31] hover:bg-gradient-to-b from-[#110C5E] to-[#110F1D] rounded-[24px]">
            <img src={s1} alt="" />
            <h1 className="pt-[70px] lg:pt-[114px] text-[22px] font-medium">
              Weskale Digital
            </h1>
            <h1 className="mt-[8px] text-[12px] uppercase">
              Where data meets growth
            </h1>
          </div>
          <div className="cursor-pointer bg-[#201D31] hover:bg-gradient-to-b from-[#110C5E] to-[#110F1D] w-[322px] h-[280px] lg:h-[322px] p-[40px] rounded-[24px]">
            <img src={s2} alt="" />
            <h1 className="pt-[70px] lg:pt-[114px] text-[22px] font-medium">
              Weskale Influence
            </h1>
            <h1 className="mt-[8px] text-[12px]">THE VOICE OF THE AGENCY</h1>
          </div>
          <div className="cursor-pointer w-[322px] h-[280px] lg:h-[322px] p-[40px] bg-[#201D31] rounded-[24px] hover:bg-gradient-to-b from-[#110C5E] to-[#110F1D]">
            <img src={s3} alt="" />
            <h1 className="pt-[70px] lg:pt-[114px] text-[22px] font-medium">
              Weskale BrandLab
            </h1>
            <h1 className="mt-[8px] text-[12px] uppercase">
              From vision to identity
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
