import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      margin: {
        "nav-item": "calc(27.5px*(100vw-900px)/(1920-900))",
      },
      padding: {
        "footer-p-small": "45px 40px 40px 40px",
        "footer-p-smallest": "35px 20px 30px 20px",
      },
      screens: {
        "max-large-screen": { min: "1190px", max: "1920px" },
        "large-screen": "1190px",
        "small-screen": { max: "1189px" },
        "between-small-smallest": { min: "768px", max: "1189px" },
        "up-smallest-screen": { min: "768px" },
        "smallest-screen": { max: "767px" },
      },
      colors: {
        primary: "#531492",
        secondary: "#7b1fd7",
        text_color: "#776985",
        input_border: "#CBB9DE",
        discover_color: "#EF6F00",
        overlay: "rgba(252, 243, 255,0.8)",
        benefit_color: "#E4F5FC",
        footer_icon: "#73BE2F",
        footer_text: "#587FB9",
        footer_text_second: "#96B2DB",
        header_bg: "#1f0038",
        header_bg_second: "rgba(31, 0, 55, 0.97)",
        header_text: "#f0d9ff",
        header_text_second: "#AE9DB8",
        header_text_third: "#ffffff",
        header_icon: "#623089",
        background_color: "#fcf3ff",
        footer_color: "#022D6D",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)"],
      },
      boxShadow: {
        "custom-inset": "0 0 10px 100px #6c63ff inset",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 15s linear infinite",
      },
      backgroundImage: {
        header_img: "url('/assets/images/header_img.svg')",
        arrow_img: "url('/assets/icons/arrow-sidebar.svg')",
        footer_img: "url('/assets/images/footer_img.svg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
