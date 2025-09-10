import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";
import messages from "../../assets/network/messages.svg";
import sms from "../../assets/network/sms.svg";
import star from "../../assets/network/star.svg";

function Network({ onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    instagram: "",
    whatsapp: "",
    niche: "",
  });
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!agreedToPrivacy) {
      alert("Please agree to the privacy policy");
      return;
    }

    emailjs
      .send(
        "service_ldrag58", // your EmailJS service ID
        "template_tuocvqd", // your template ID
        formData, // sends the entire formData
        "v4jlP3MvLX6vd0mrT" // your public key
      )
      .then(
        () => {
          alert("✅ Thank you! Your message has been sent.");
          setFormData({
            fullName: "",
            email: "",
            instagram: "",
            whatsapp: "",
            niche: "",
          });
          setAgreedToPrivacy(false);
        },
        (error) => {
          console.error(error);
          alert("❌ Oops! Something went wrong.");
        }
      );
  };
  return (
    <div className="mt-[40px] lg:mt-0 py-[40px] lg:py-0 px-4 lg:px-0 lg:mb-[80px] 3xl:mb-[120px] mx-auto lg:w-[1200px] lg:rounded-[48px] 3xl:rounded-none 3xl:w-[1600px] lg:h-[700px] 3xl:h-[806px] bg-network-bg bg-cover bg-center lg:flex items-center justify-center lg:gap-[60px] 3xl:gap-[90px] relative z-10">
      <div className="3xl:ml-[80px]">
        {/* <div className="flex items-start gap-2">
          <img src={star} alt="" />
          <h1 className="font-grotesk font-semibold text-white">
            JOIN OUR NETWORK
          </h1>
        </div> */}
        <div className="flex items-start gap-2">
          <img src={star} alt="star" />
          <motion.h1
            className="font-grotesk font-semibold text-white relative overflow-hidden"
            initial={{ backgroundPosition: "200% center" }}
            animate={{ backgroundPosition: "-200% center" }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundImage:
                "linear-gradient(90deg, #ffffff 0%, #ffffff 40%, #1f48ff 50%, #ffffff 60%, #ffffff 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            JOIN OUR NETWORK
          </motion.h1>
        </div>
        <h1 className="3xl:text-[32px] 3xl:leading-[42px] font-grotesk font-medium text-white mt-4 capitalize">
          hey Are you ready to transform your <br /> online process?
        </h1>
        <h1 className="hidden lg:block font-roboto text-white leading-[30px] font-normal mt-4">
          Not everyone gets in. Our network is built for creators who bring more
          than content. <br /> Those who spark conversations, influence culture,
          and deliver real impact. <br /> <br />
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
        <h1 className="lg:hidden font-roboto text-[14px] text-white leading-[30px] font-normal mt-4">
          Not everyone gets in. Our network is built for creators who bring more
          than content. Those who spark conversations, influence culture, and
          deliver real impact. <br /> <br />
          By joining, you’ll gain access to carefully selected collaborations
          with leading brands, premium campaigns designed for long-term growth,
          and a community of creators who share the same
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
      <div className="flex items-start lg:gap-[100px] 3xl:gap-[140px] lg:mt-[35px] 3xl:mt-[66px]">
        <div>
          <div className="p-4 bg-white rounded-[12px] lg:rounded-[24px] lg:w-[500px] 3xl:w-[668px] 3xl:h-[685px] lg:p-6 3xl:p-[48px] mt-[48px] lg:mb-[80px] 3xl:mb-[120px]">
            <form className="" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div>
                <h1 className="lg:mb-2 text-[#262626] font-roboto font-normal">
                  Full Name*
                </h1>
                <input
                  type="text"
                  name="fullName"
                  placeholder="First & Last Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent border-b border-[#E9E9E9] text-[#ACA7C8] 
                 lg:pb-4 font-roboto placeholder-[#B7B8BE] py-2 lg:py-3 px-0 
                 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <h1 className="lg:mb-2 text-[#262626] font-roboto font-normal mt-6">
                  Email Address*
                </h1>
                <input
                  type="email" // ✅ proper validation
                  name="email"
                  placeholder="For official communication"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent border-b border-[#E9E9E9] text-[#ACA7C8] 
                 lg:pb-4 font-roboto placeholder-[#B7B8BE] py-2 lg:py-3 px-0 
                 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>

              {/* Instagram */}
              <div>
                <h1 className="lg:mb-2 text-[#262626] font-roboto font-normal mt-6">
                  Instagram Handle (@username)*
                </h1>
                <input
                  type="text"
                  name="instagram"
                  placeholder="Link to your main profile"
                  value={formData.instagram}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent border-b border-[#E9E9E9] text-[#ACA7C8] 
                 lg:pb-4 font-roboto placeholder-[#B7B8BE] py-2 lg:py-3 px-0 
                 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>

              {/* WhatsApp */}
              <div>
                <h1 className="lg:mb-2 text-[#262626] font-roboto font-normal mt-6">
                  WhatsApp Number*
                </h1>
                <input
                  type="text"
                  name="whatsapp"
                  placeholder="For quick and direct contact"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent border-b border-[#E9E9E9] text-[#ACA7C8] 
                 lg:pb-4 font-roboto placeholder-[#B7B8BE] py-2 lg:py-3 px-0 
                 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>

              {/* Niche */}
              <div>
                <h1 className="lg:mb-2 text-[#262626] font-roboto font-normal mt-6">
                  Your Niche*
                </h1>
                <input
                  type="text"
                  name="niche"
                  placeholder="Fashion, Lifestyle, Fitness, Beauty, Tech, Business, Travel, Other"
                  value={formData.niche}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent border-b border-[#E9E9E9] text-[#ACA7C8] 
                 lg:pb-4 font-roboto placeholder-[#B7B8BE] py-2 lg:py-3 px-0 
                 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>

              {/* Privacy + Submit */}
              <div className="flex items-start justify-between mt-6">
                <label className="flex items-start text-[#B7B8BE] font-roboto cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreedToPrivacy}
                    onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                    className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-md 
                   checked:bg-gradient-to-b checked:from-[#846EFF] checked:to-[#1F48FF] 
                   checked:border-transparent transition-all duration-200"
                  />
                  <span className="ml-2 mt-[-4px]">
                    By completing the form, you agree to our Terms and Privacy
                    Policy.
                  </span>
                </label>

                <button
                  type="submit" // ✅ now actually submits form
                  className="3xl:w-[160px] bg-gradient-to-b from-[#846EFF] to-[#1F48FF] 
                 text-white text-[14px] font-medium lg:h-[42px] 3xl:h-[54px] px-2 
                 rounded-[10px] mt-[24px] transition-all duration-200 shadow-lg 
                 hover:shadow-xl transform hover:scale-[1.02] uppercase tracking-wide"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Network;
