import React, { useState } from "react";
import arrow from "../../assets/images/faq/arrow.svg";
import cross from "../../assets/images/faq/cross.svg";

const Faq = () => {
  const [openItems, setOpenItems] = useState({});

  const faqData = [
    {
      id: 1,
      question: "How long does it take to see real results from a campaign?",
      answer:
        "Most of our clients start noticing results within 2 to 4 weeks. Ads and influencer campaigns usually bring quick engagement and traffic, while branding and content strategies take a bit longer but create stronger, long-term growth. This way, you get both immediate impact and lasting results.",
    },
    {
      id: 2,
      question: "Do you work with startups as well as established brands?",
      answer:
        "Yes. We support startups by helping them gain visibility, attract their first customers, and scale faster. At the same time, we work with established brands to expand their influence, enter new markets, and reach higher levels of performance. Our strategies are always adapted to your stage of growth.",
    },
    {
      id: 3,
      question: "How do you measure the success of your campaigns?",
      answer:
        "We focus on clear and measurable KPIs such as reach, engagement, conversions, and ROI. Every campaign comes with detailed reports and insights, so you always know exactly what impact our work is having. For us, success means results that drive your business forward, not just vanity metrics.",
    },
    {
      id: 4,
      question: "Why should I choose Weskale over other agencies?",
      answer:
        "Because Weskale brings together digital expertise, creative content, and influencer power into one approach. Unlike many agencies, we don’t just focus on visibility — we focus on measurable growth, stronger brand positioning, and lasting trust with your audience. That’s what makes us different.",
    },
    // {
    //   id: 5,
    //   question: "Can you integrate third-party tools or platforms?",
    //   answer:
    //     "Lorem ipsum dolor sit amet consectetur. Senectus enim pellentesque consectetur sed praesent. Augue volutpat diam purus egestas pharetra nulla porttitor ridiculus. Eget vitae sit fusce nisl. Et a id nulla adipiscing elit cursus.",
    // },
  ];

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="bg-[#1A1921] flex items-center justify-center mx-auto lg:py-[80px] 3xl:py-[120px]">
      <div className="lg:flex mx-auto gap-[100px]">
        <div className=" lg:mb-12 p-4 lg:p-0">
          <h2 className="text-4xl md:text-5xl text-white mb-6 font-medium font-grotesk">
            Any{" "}
            <span className="font-playfair text-[#1F48FF] italic font-medium">
              Questions?
            </span>
          </h2>
          <p className="hidden lg:block text-[#ACA7C8] text-lg leading-[30px] font-roboto">
            We believe clarity builds trust. Here are the answers to the <br />
            questions we get most often and if you need more, our team <br /> is
            always here to help.
          </p>
          <p className="text-[#ACA7C8] text-[16px] leading-[25px] font-roboto lg:hidden">
            We believe clarity builds trust. Here are the answers to the
            questions we get most often and if you need more, our team is always
            here to help.
          </p>
        </div>

        <div className="p-4 lg:p-0">
          {faqData.map((item) => (
            <div className="">
              <div
                key={item.id}
                className={`${
                  openItems[item.id] ? "border border-[#1F48FF]" : "border-none"
                } font-roboto font-[20px] lg:w-[550px] 3xl:w-[783px] border border-[#1F48FF] rounded-[12px] bg-[#201D31] transition-all duration-200`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-white font-medium text-lg pr-4">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openItems[item.id] ? (
                      <img src={cross} alt="" />
                    ) : (
                      <img src={arrow} alt="" />
                    )}
                  </div>
                </button>
              </div>
              <div
                className={`bg-[#201D31] font-roboto lg:text-[18px] font-normal my-[6px] lg:w-[550px] 3xl:w-[783px] overflow-hidden transition-all duration-300 ease-in-out rounded-[12px] border border-[#1F48FF] ${
                  openItems[item.id]
                    ? "max-h-96 opacity-100 pt-[16px] my-[18px]"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-[#ACA7C8] leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
