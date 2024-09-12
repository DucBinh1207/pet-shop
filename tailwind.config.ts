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
      screens: {
        "large-screen": "1190px",
        "small-screen": { max: "1189px" },
      },
      colors: {
        primary: "#531492",
        secondary: "#7b1fd7",
        header_bg: "#1f0038",
        header_bg_second: "rgba(31, 0, 55, 0.97)",
        header_text: "#f0d9ff",
        header_text_second: "#AE9DB8",
        header_text_third: "#ffffff",
        header_icon: "#623089",
        background_color: "#fcf3ff",
        input_border: "#CBB9DE",
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
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
