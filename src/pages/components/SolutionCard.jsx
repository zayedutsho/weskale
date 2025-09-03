import { Link } from "react-router-dom";
import circle from "../../assets/solution/circle.svg";
import tick from "../../assets/solution/tick.svg";

const SolutionCard = ({
  title,
  subtitle,
  description,
  sections,
  buttonText,
  highlight,
}) => {
  return (
    <div
      className={`cursor-pointer lg:w-[350px] 3xl:w-[420px] flex flex-col justify-between rounded-[32px] py-12 px-8 shadow-lg text-white min-h-[600px] 
      ${
        highlight
          ? "bg-gradient-to-b from-[#110C5E]  to-[#110F1D] border border-[#1F48FF]"
          : "bg-[#201D31]"
      }`}
    >
      {/* Header */}
      <div>
        <img src={circle} alt="" className="pb-6" />
        <p className="text-[14px] font-grotesk uppercase tracking-wider text-white font-semibold">
          {title}
        </p>
        <h3 className="text-[26px] font-medium mt-2">{subtitle}</h3>
        <p className="font-roboto text-[16px] text-[#ACA7C8] mt-3">
          {description}
        </p>
        <hr className="my-[40px] border-[#fff] opacity-[20%]" />

        {/* Sections */}
        {sections.map((section, idx) => (
          <div key={idx} className="mt-6">
            <h4 className="font-grotesk uppercase text-sm font-semibold text-gray-300">
              {section.heading}
            </h4>
            <ul className="mt-3 space-y-2">
              {section.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <img src={tick} alt="" className="mt-1" />
                  <span className="text-[16px] text-[#ACA7C8]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Button */}
      <Link to="/contact-us">
        <button
          className={`mt-6 w-full h-[42px] 3xl:h-[54px] rounded-[10px] uppercase font-medium text-[14px] font-grotesk ${
            highlight
              ? "bg-gradient-to-b from-[#846EFF] to-[#1F48FF] hover:bg-blue-700"
              : "bg-white text-black hover:bg-gray-200"
          }`}
        >
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

export default SolutionCard;
