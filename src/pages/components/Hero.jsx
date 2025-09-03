import calendarIcon from "../../assets/images/hero/calendarIcon.svg";
import heroVideo from "../../assets/video/hero.gif";

const Hero = () => {
  return (
    <div className="lg:ml-[100px] 3xl:ml-[130px] lg:text-[56px] 3xl:text-[60px] font-roboto mt-[120px] lg:mt-[140px] 3xl:mt-[170px]">
      <div className="p-4 lg:p-0 flex flex-col-reverse lg:flex-row items-center justify-center gap-[50px] lg:gap-[100px]">
        <div>
          <h1 className="hidden lg:block font-grotesk font-medium text-white text-left lg:leading-[55px] 3xl:leading-[75px]">
            Weskale Is Where <br />
            Your Brand's{" "}
            <span className="font-playfair text-[#1F48FF] italic">
              Next Big <br />
              Chapter
            </span>{" "}
            Begins
          </h1>
          <h1 className="text-[32px] lg:hidden font-grotesk font-medium text-white text-left leading-[40px]">
            Weskale Is Where Your Brand's{" "}
            <span className="font-playfair text-[#1F48FF] italic">
              Next Big Chapter
            </span>{" "}
            Begins
          </h1>
          <div className="hidden lg:flex font-roboto text-[#ACA7C8] text-[14px] 3xl:text-[18px] mt-4 lg:mt-[30px]">
            <h1>
              Weskale BrandLab <span className="mx-[16px]">·</span>
            </h1>
            <h1>
              Weskale Digital <span className="mx-[16px]">·</span>
            </h1>
            <h1>Weskale Influence</h1>
          </div>
          <div className="grid grid-cols-2 gap-2 lg:hidden font-roboto text-[#ACA7C8] text-[16px] 3xl:text-[18px] mt-8 lg:mt-[30px]">
            <h1><span className="mx-[16px]">·</span> Weskale BrandLab</h1>
            <h1><span className="mx-[16px]">·</span> Weskale Digital</h1>
            <h1><span className="mx-[16px]">·</span> Weskale Influence</h1>
          </div>

          <div className="z-10 relative mt-8 lg:mt-0">
            <h1 className="relative z-10 bg-white lg:mt-[45px] cursor-pointer flex items-center justify-center rounded-[10px] lg:w-[300px] 3xl:w-[320px] h-[42px] 3xl:h-[54px] capitalize text-[14px] text-[#0F0622]">
              <a
                href="https://calendly.com/contact-weskaleagency/30min?"
                target="_blank"
                className="w-full h-full flex items-center justify-center"
              >
                BOOK YOUR FREE MARKETING AUDIT
              </a>
            </h1>
          </div>
        </div>
        {/* <div className="">
          <img src={heroImage} alt="" className="lg:w-[500px] 3xl:w-[674px]" />
          <img
            src={calendarIcon}
            alt=""
            className="absolute right-[56px] cursor-pointer hidden lg:block"
          />
        </div> */}
        <div className="">
          {/* <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="lg:w-[500px] 3xl:w-[674px]"
          /> */}
          <img src={heroVideo} alt="" className="lg:w-[500px] 3xl:w-[746px]" />
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
        </div>
      </div>
      {/* <img
        src={calendarIcon}
        alt=""
        className="mt-4 lg:hidden absolute right-[20px] cursor-pointer w-[50px]"
      /> */}
    </div>
  );
};

export default Hero;
