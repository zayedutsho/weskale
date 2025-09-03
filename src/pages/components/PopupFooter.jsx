import star from "../../assets/network/star.svg";
import sms from "../../assets/network/sms.svg";
import messages from "../../assets/network/messages.svg";
import { useState } from "react";

function PopupFooter({ onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    project: "",
    budget: "$8 - $15k",
  });
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);

  const budgetOptions = ["$4 - $8k", "$8 - $15k", "$15 - $20k", "$20k +"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!agreedToPrivacy) {
      alert("Please agree to the privacy policy");
      return;
    }
    console.log("Form submitted:", formData);
    // Handle form submission here
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="mt-[10px] py-[40px] lg:py-0 px-4 lg:px-0 mx-auto lg:w-[1200px] lg:rounded-[48px] 3xl:rounded-none 3xl:w-[1600px] lg:h-[550px] 3xl:h-[806px] bg-network-bg bg-cover bg-center lg:flex items-center justify-center lg:gap-[60px] 3xl:gap-[90px] relative z-10">
        <div className="3xl:ml-[60px]">
          <div className="flex items-start gap-2">
            <img src={star} alt="" />
            <h1 className="font-grotesk font-semibold text-white">
              JOIN OUR NETWORK
            </h1>
          </div>
          <h1 className="3xl:text-[32px] 3xl:leading-[42px] font-grotesk font-medium text-white mt-4 capitalize">
            Are you ready to transform your <br /> online process?
          </h1>
          <h1 className="hidden 3xl:block font-roboto text-white leading-[30px] font-normal mt-4">
            Not everyone gets in. Our network is built for creators who bring
            more than content. <br /> those who spark conversations, influence
            culture, and deliver real impact. <br /> <br />
            By joining, you’ll gain access to carefully selected collaborations
            with leading brands, <br /> premium campaigns designed for long-term
            growth, and a community of creators <br /> who share the same
            ambition for excellence. <br /> <br />
            <div className="flex items-center gap-4">
              <img src={sms} alt="" />
              <h1>contact@weskaleagency.com</h1>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <img src={messages} alt="" />
              <h1>What’sApp: 01234 567 890 </h1>
            </div>
          </h1>
          <h1 className="hidden lg:block 3xl:hidden font-roboto text-white leading-[30px] font-normal mt-4">
            Not everyone gets in. Our network is built for creators who bring{" "}
            <br /> more than content. those who spark conversations, influence
            culture,
            <br /> and deliver real impact. <br /> <br />
            By joining, you’ll gain access to carefully selected collaborations{" "}
            <br />
            with leading brands, premium campaigns designed for long-term <br />{" "}
            growth, and a community of creators who share the same <br />
            ambition for excellence. <br /> <br />
            <div className="flex items-center gap-4">
              <img src={sms} alt="" />
              <h1>contact@weskaleagency.com</h1>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <img src={messages} alt="" />
              <h1>What’sApp: 01234 567 890 </h1>
            </div>
          </h1>

          <div className="cursor-pointer flex items-center justify-center w-[206px] h-[42px] 3xl:h-[54px] rounded-[10px] bg-white mt-8 uppercase text-[14px] font-grotesk font-medium text-[#030303]">
            <a
              href="https://calendly.com/contact-weskaleagency/30min?"
              target="_blank"
            >
              Schedule a meeting
            </a>
          </div>
        </div>
        <div className="flex items-start lg:gap-[100px] 3xl:gap-[140px] 3xl:mt-[66px]">
          <div>
            <div className="bg-white rounded-[12px] lg:rounded-[24px] lg:w-[500px] 3xl:w-[668px] lg:h-[500px] 3xl:h-[685px] lg:p-6 p-4 3xl:p-[48px] mt-[25px] lg:mt-[80px] 3xl:mt-[48px] lg:mb-[80px] 3xl:mb-[120px]">
              <div className="">
                {/* Full Name */}
                <div>
                  <h1 className="3xl:mb-2 text-[#262626] font-roboto font-normal">
                    Full Name*
                  </h1>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="First & Last Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-[#E9E9E9] text-[#ACA7C8] 3xl:pb-4 font-roboto placeholder-[#B7B8BE] lg:py-1 3xl:py-3 px-0 focus:outline-none focus:border-blue-400 transition-colors"
                    required
                  />
                </div>
                <div>
                  <h1 className="3xl:mb-2 text-[#262626] font-roboto font-normal mt-6">
                    Email Address*
                  </h1>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="For official communication"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-[#E9E9E9] text-[#ACA7C8] 3xl:pb-4 font-roboto placeholder-[#B7B8BE] lg:py-1 3xl:py-3 px-0 focus:outline-none focus:border-blue-400 transition-colors"
                    required
                  />
                </div>
                <div>
                  <h1 className="3xl:mb-2 text-[#262626] font-roboto font-normal mt-6">
                    Instagram Handle (@username)*
                  </h1>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Link to your main profile"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-[#E9E9E9] text-[#ACA7C8] 3xl:pb-4 font-roboto placeholder-[#B7B8BE] lg:py-1 3xl:py-3 px-0 focus:outline-none focus:border-blue-400 transition-colors"
                    required
                  />
                </div>
                <div>
                  <h1 className="3xl:mb-2 text-[#262626] font-roboto font-normal mt-6">
                    WhatsApp Number*
                  </h1>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="For quick and direct contact"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-[#E9E9E9] text-[#ACA7C8] 3xl:pb-4 font-roboto placeholder-[#B7B8BE] lg:py-1 3xl:py-3 px-0 focus:outline-none focus:border-blue-400 transition-colors"
                    required
                  />
                </div>
                <div>
                  <h1 className="3xl:mb-2 text-[#262626] font-roboto font-normal mt-6">
                    Your Niche*
                  </h1>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Fashion, Lifestyle, Fitness, Beauty, Tech, Business, Travel, Other"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-[#E9E9E9] text-[#ACA7C8] 3xl:pb-4 font-roboto placeholder-[#B7B8BE] lg:py-1 3xl:py-3 px-0 focus:outline-none focus:border-blue-400 transition-colors"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="hidden 3xl:flex items-center justify-between mt-2">
                  <h1 className="text-[#B7B8BE] font-roboto">
                    By completing the form, you agree to our Terms, <br />{" "}
                    and Privacy Policy.
                  </h1>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="3xl:w-[160px] bg-gradient-to-b from-[#846EFF] to-[#1F48FF] text-white text-[14px] font-medium lg:h-[42px] 3xl:h-[54px] px-2 rounded-[10px] mt-[24px] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] uppercase tracking-wide"
                  >
                    SEND MESSAGE
                  </button>
                </div>
                <div className="3xl:hidden hidden lg:flex items-center justify-between mt-2">
                  <h1 className="text-[#B7B8BE] font-roboto">
                    By completing the form, you <br /> agree to our Terms,{" "}
                    and Privacy Policy.
                  </h1>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="3xl:w-[200px] bg-gradient-to-b from-[#846EFF] to-[#1F48FF] text-white text-[14px] font-medium lg:h-[42px] 3xl:h-[54px] px-2 rounded-[10px] mt-[24px] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] uppercase tracking-wide"
                  >
                    SEND MESSAGE
                  </button>
                </div>
                <div className="lg:hidden items-center justify-between mt-2">
                  <h1 className="text-[#B7B8BE] font-roboto">
                    By completing the form, you agree to our Terms, and Privacy
                    Policy.
                  </h1>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="3xl:w-[200px] bg-gradient-to-b from-[#846EFF] to-[#1F48FF] text-white text-[14px] font-medium h-[42px] 3xl:h-[54px] px-2 rounded-[10px] mt-[24px] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] uppercase tracking-wide"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 lg:right-5 3xl:right-8 text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default PopupFooter;
