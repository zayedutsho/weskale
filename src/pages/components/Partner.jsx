import one from "../../assets/partner/1.svg";
import google from "../../assets/partner/google.svg";
import meta from "../../assets/partner/meta.svg";
import tiktok from "../../assets/partner/tiktok.svg";
import adobe from "../../assets/partner/adobe.svg";
import figma from "../../assets/partner/figma.svg";
import reddit from "../../assets/partner/reddit.svg";
import notion from "../../assets/partner/notion.svg";

const Partner = () => {
  return (
    <div className="lg:mb-[80px] 3xl:mb-[150px] mt-8 lg:mt-0">
      <h1 className="text-white text-center mb-[16px] lg:mb-[40px] font-grotesk">
        OUR TRUSTED PARTNERS
      </h1>
      <div className="px-4 py-2 lg:max-w-[800px] 3xl:max-w-[1150px] mx-auto bg-[#201D31] lg:rounded-[12px] 3xl:rounded-[24px] lg:px-[24px] 3xl:px-[45px] lg:py-[32px] 3xl:py-[60px]">
        <div className="flex items-center justify-center gap-[20px] lg:gap-[45px] 3xl:gap-[90px]">
          <img src={one} alt="" className="w-[30px] lg:w-[48px]"/>
          <img src={google} alt="" className="w-[30px] lg:w-[52px]"/>
          <img src={meta} alt="" className="w-[30px] lg:w-[74px]"/>
          <img src={tiktok} alt="" className="w-[30px] lg:w-[45px]"/>
          <img src={adobe} alt="" className="w-[30px] lg:w-[45px]"/>
          <img src={figma} alt="" className="w-[30px] lg:w-[48px] h-[30px] lg:h-[47px]"/>
          <img src={reddit} alt="" className="w-[30px] lg:w-[48px]"/>
          <img src={notion} alt="" className="w-[30px] lg:w-[48px]"/>
        </div>
      </div>
    </div>
  );
};

export default Partner;
