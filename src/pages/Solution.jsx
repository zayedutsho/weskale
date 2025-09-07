import { motion } from "framer-motion";
import Meeting from "./components/Meeting";
import SolutionCard from "./components/SolutionCard";

const Solution = () => {
  const solutions = [
    {
      title: "Launch Solution",
      subtitle: "Build & Launch Your Brand",
      description:
        "For businesses that want to set up their foundations and start building visibility.",
      sections: [
        {
          heading: "BrandLab",
          items: [
            "Basic visual identity (logo + mini style guide)",
            "Social media visuals (post + carousel+Story)",
            "1 short-form video (reel / TikTok / promo)",
          ],
        },
        {
          heading: "Digital",
          items: ["Landing page"],
        },
        {
          heading: "Influence",
          items: ["1 campaign with an influencer"],
        },
      ],
      buttonText: "Get Started",
    },
    {
      title: "Growth Solution",
      subtitle: "Expand Your Reach",
      description:
        "For brands ready to scale their reach and start acquiring customers.",
      sections: [
        {
          heading: "BrandLab",
          items: [
            "Full brand identity (logo + style guide + guidelines)",
            "Storytelling & brand positioning",
            "Social media design pack (posts + carousels + story)",
            "Short-form video (reel / TikTok / promo)",
          ],
        },
        {
          heading: "Digital",
          items: [
            "Website or e-commerce website",
            "Social media advertising campaigns",
            "Technical SEO + optimized content",
            "Analytics dashboard & monthly KPI reporting",
          ],
        },
        {
          heading: "Influence",
          items: ["1+ influencer campaigns"],
        },
      ],
      buttonText: "Get Started",
      highlight: true, // This makes the middle one gradient
    },
    {
      title: "Scale Solution",
      subtitle: "For Established Brands",
      description:
        "For ambitious brands aiming to scale massively and build authority.",
      sections: [
        {
          heading: "BrandLab",
          items: [
            "Complete rebranding + premium guidelines",
            "Social media advertising campaigns",
            "Advanced storytelling & brand positioning",
            "Video Production (Instagram, TikTok, YouTube, LinkedIn … )",
            "Large-scale UGC production with dedicated creators",
          ],
        },
        {
          heading: "Digital",
          items: [
            "Advanced Platforms* (Mobile Apps, Marketplaces, SaaS, CRM/ERP Integrations, Automation Systems, Dashboards)",
            "SEO + SEA (Google Ads, retargeting campaigns)",
            "Ongoing maintenance & security",
            "Social media advertising campaigns",
          ],
        },
        {
          heading: "Influence",
          items: [
            "Influencer campaigns",
            "Brand Ambassador & Affiliate programs",
            "Premium placements on top partner pages",
          ],
        },
      ],
      buttonText: "Get Started",
    },
  ];
  const headingVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2, // delay between each card
      },
    },
  };

  // individual card pop-up animation
  // const cardVariants = {
  //   hidden: { opacity: 0, y: 30 },
  //   show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  // };

  return (
    <div>
      <section className="py-10 lg:py-12 px-4 lg:px-6">
        <motion.h1
          className="hidden lg:block mt-[60px] lg:mt-[80px] 3xl:mt-[120px] lg:mb-[60px] 3xl:mb-[90px] text-center text-[32px] lg:text-[50px] 3xl:text-[56px] text-white font-grotesk"
          initial="hidden"
          animate="visible" // 👈 animate immediately
          variants={headingVariants}
        >
          Launch, Manage &nbsp;
          <span className="font-playfair italic text-[#1F48FF] text-[34px] lg:text-[52px] 3xl:text-[60px]">
            Grow Your <br />
            Business&nbsp;
          </span>
          &nbsp;Online
        </motion.h1>

        <motion.h1
          className="leading-[45px] lg:hidden mt-[60px] lg:mt-[80px] 3xl:mt-[120px] lg:mb-[60px] 3xl:mb-[90px] text-center text-[24px] lg:text-[50px] 3xl:text-[56px] text-white font-grotesk"
          initial="hidden"
          animate="visible" // 👈 animate immediately
          variants={headingVariants}
        >
          Launch, Manage &nbsp;
          <span className="font-playfair italic text-[#1F48FF] text-[24px] lg:text-[52px] 3xl:text-[60px]">
            Grow Your Business&nbsp;
          </span>
          &nbsp;Online
        </motion.h1>
        <motion.div
          className="mt-[40px] lg:mt-0 grid grid-cols-1 md:grid-cols-3 gap-6 lg:max-w-[1100px] 3xl:max-w-[1300px] mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }} // 👈 animate immediately
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {solutions.map((solution, idx) => (
            <SolutionCard key={idx} {...solution} />
          ))}
        </motion.div>
      </section>
      <Meeting />
    </div>
  );
};

export default Solution;
