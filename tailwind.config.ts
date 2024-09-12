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
      colors: {
        primary: "#531492",
        secondary: "#7b1fd7",
        header_bg: "#1f0038",
        header_text: "#f0d9ff",
        header_icon: "##623089",
        background_color: "#fcf3ff",
        input_border: "#CBB9DE",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)"],
      },
      boxShadow: {
        "custom-inset": "0 0 10px 100px #6c63ff inset",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
