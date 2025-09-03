import { useState } from "react";
import Meeting from "./components/Meeting";

const Contact = () => {
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
    <div>
      <div className="lg:max-w-[1050px] 3xl:max-w-[1250px] mx-auto mt-[100px] lg:mt-[150px] 3xl:mt-[200px] flex flex-col items-start relative z-10">
        <div className="px-4 lg:px-0">
          <h1 className="text-[32px] lg:text-[50px] 3xl:text-[56px] text-white font-grotesk">
            Contact{" "}
            <span className="font-playfair italic text-[#5B4BFF] text-[34px] lg:text-[52px] 3xl:text-[60px]">
              Skale
            </span>
          </h1>
          <h1 className="text-[#ACA7C8] text-lg leading-[30px] font-roboto">
            Let’s see what we can do to make your project really stand out.
          </h1>
        </div>
        <div className="px-4 lg:px-0 flex flex-col-reverse lg:flex-row items-start lg:gap-[100px] 3xl:gap-[140px]">
          <div>
            <div className="bg-[#201D31] rounded-[24px] lg:w-[600px] 3xl:w-[668px] 3xl:h-[685px] p-[24px] lg:p-[48px] mt-[48px] lg:mb-[80px] 3xl:mb-[120px]">
              <div className="">
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-gray-600 text-[#ACA7C8] pb-10 font-roboto placeholder-gray-400 py-3 px-0 focus:outline-none focus:border-blue-400 transition-colors"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-gray-600 text-[#ACA7C8] pb-10 font-roboto mt-8 placeholder-gray-400 py-3 px-0 focus:outline-none focus:border-blue-400 transition-colors"
                    required
                  />
                </div>

                {/* Project Description */}
                <div>
                  <textarea
                    name="project"
                    placeholder="Tell us about the project"
                    value={formData.project}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-transparent border-b border-gray-600 text-[#ACA7C8] mt-8 placeholder-gray-400 py-3 px-0 resize-none focus:outline-none focus:border-blue-400 transition-colors"
                    required
                  />
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-[#ACA7C8] pb-6 font-roboto mt-8 text-sm">
                    Your approximate budget (optional):
                  </label>
                  <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-[16px] pb-6">
                    {budgetOptions.map((budget) => (
                      <button
                        key={budget}
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, budget }))
                        }
                        className={`w-[120px] lg:w-[131px] h-[42px] lg:h-[50px] px-4 rounded-full text-sm font-medium transition-all ${
                          formData.budget === budget
                            ? "bg-[#1F48FF26] border border-[#1F48FF] text-white"
                            : "bg-[#3c3a4a] text-white hover:bg-gray-600/50 border-none"
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Privacy Policy */}
                <div className="flex items-start gap-3">
                  <div
                    onClick={() => setAgreedToPrivacy(!agreedToPrivacy)}
                    className={`mt-1 w-5 h-5 rounded border-2 cursor-pointer transition-all duration-200 flex items-center justify-center ${
                      agreedToPrivacy
                        ? "bg-blue-500 border-blue-500"
                        : "border-gray-500 bg-transparent hover:border-gray-400"
                    }`}
                  >
                    {agreedToPrivacy && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                  <label
                    htmlFor="privacy"
                    className="text-[#ACA7C8] text-sm mt-[4px]"
                    onClick={() => setAgreedToPrivacy(!agreedToPrivacy)}
                  >
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-white hover:text-blue-300 underline"
                    >
                      privacy policy
                    </a>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-b from-[#846EFF] to-[#1F48FF] text-white text-[14px] font-medium h-[42px] 3xl:h-[54px] px-6 rounded-[10px] mt-[24px] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] uppercase tracking-wide"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-12">
            <h1 className="font-grotesk text-[18px] text-white">HEAD OFFICE</h1>
            <h1 className="text-[#ACA7C8] font-roboto text-lg mt-4">
              71-75 Shelton Street <br /> Covent Garden, London, <br />
              United Kingdom
            </h1>
            <h1 className="font-grotesk text-[18px] text-white mt-8 lg:mt-12">
              E-MAIL
            </h1>
            <h1 className="text-[#ACA7C8] font-roboto text-lg lg:mt-4">
              contact@weskaleagency.com
            </h1>
          </div>
        </div>
      </div>
      <div className="lg:mt-[-80px]">
        <Meeting />
      </div>
    </div>
  );
};

export default Contact;
