/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['"Sharp Grotesk"', "sans-serif"],
        playfair: ['"Playfair Display"', "sans-serif"],
        roboto: ['"Roboto"', "sans-serif"],
      },
      screens: {
        xs: "480px", // Custom small screen
        sm: "640px", // Tailwind default
        md: "768px", // Tailwind default
        lg: "1024px", // Tailwind default
        xl: "1280px", // Tailwind default
        "2xl": "1536px", // Tailwind default
        "3xl": "1920px", // Custom large screen
      },
      backgroundImage: {
        "network-bg": "url('/src/assets/network/bg.svg')",
      },
    },
  },
  plugins: [],
};
