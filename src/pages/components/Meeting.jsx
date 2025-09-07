import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";

function Meeting() {
  // Customize via URL parameters
  const calendlyUrl =
    "https://calendly.com/contact-weskaleagency/30min?" +
    new URLSearchParams({
      background_color: "201D31", // Dark background
      text_color: "ffffff", // White text
      primary_color: "3b82f6", // Blue primary
      hide_landing_page_details: "0", // Show details
      hide_gdpr_banner: "1", // Hide GDPR banner
    }).toString();

  const headingVariants = {
    hidden: { opacity: 0, y: 30 }, // start slightly down and invisible
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" }, // slow and smooth
    },
  };
  return (
    <div className="mt-10 lg:mt-[60px] 3xl:mt-[100px] 3xl:mb-[60px] relative">
      <div className="text-white text-center font-grotesk">
        <motion.h1
          className="text-[18px] font-medium uppercase"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          If you're ready to get down to business
        </motion.h1>

        <motion.h1
          className="mb-6 lg:mb-0 text-[32px] lg:text-[60px] font-medium mt-2 capitalize"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          Book a meeting
        </motion.h1>
      </div>
      {/* Custom background wrapper */}
      <div className="shadow-2xl">
        <InlineWidget
          url={calendlyUrl}
          styles={{
            height: "700px",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        />
      </div>

      <style jsx>{`
        /* Remove scrollbars and add smooth styling */
        .calendly-inline-widget iframe {
          scrollbar-width: none;
          -ms-overflow-style: none;
          border-radius: 16px;
        }

        .calendly-inline-widget iframe::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default Meeting;
