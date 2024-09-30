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
        "up-largest-screen": { min: "1920px" },
        "largest-screen": { max: "1919px" },
        "up-xx-large-screen": { min: "1648px" },
        "down-xx-large-screen": { min: "1261px", max: "1647px" },
        "max-large-screen": { min: "1190px", max: "1920px" },
        "x-large-screen": { max: "1340px" },
        "up-large-screen": { min: "768px", max: "1260px" },
        "large-screen": "1190px",
        "up-medium-screen": { min: "1024px" },
        "medium-screen": { max: "1023px" },
        "small-screen": { max: "1189px" },
        "up-x-small-screen": { min: "988px", max: "1189px" },
        "x-small-screen": { max: "987px" },
        "between-small-smallest": { min: "768px", max: "1189px" },
        "up-smallest-screen": { min: "768px" },
        "smallest-screen": { max: "767px" },
        "up-x-smallest-screen": { min: "756px", max: "987px" },
        "x-smallest-screen": { max: "755px" },
        "up-xx-smallest-screen": { min: "620px", max: "755px" },
        "xx-smallest-screen": { max: "619px" },
        "xxx-smallest-screen": { max: "500px" },
      },
      colors: {
        primary: "#531492",
        secondary: "#7b1fd7",
        tertiary: "#531492 ",
        text_color: "#776985",
        text_color_second: "#f0d9ff",
        text_color_third: "#AE9DB8",
        text_color_fourth: "#ffffff",
        input_border_color: "#CBB9DE",
        dark_orange_color: "#EF6F00",
        overlay_color: "rgba(252, 243, 255,0.8)",
        light_gray_color: "#E4F5FC",
        light_gray_color_second: "#f0ebf2",
        green_color: "#73BE2F",
        blue_gray_color: "#587FB9",
        blue_gray_second_color: "#96B2DB",
        header_bg_color: "#1f0038",
        header_bg_color_second: "rgba(31, 0, 55, 0.97)",
        dark_purple_color: "#623089",
        background_color: "#fcf3ff",
        form_color: "#fcf3ff",
        dark_blue_color: "#022D6D",
        soft_dark_blue_color: "rgba(0, 35, 75, 0.15)",
        dark_yellow_color: "#ffa61e",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)"],
        quicksand: ["var(--font-quicksand)"],
      },
      boxShadow: {
        "custom-inset": "0 0 10px 100px #6c63ff inset",
        out_circular_process:
          "6px 6px 10px -1px rgba(0,0,0,0.15),-6px -6px 10px -1px rgba(255,255,255,0.7)",
        in_circular_process:
          "inset 4px 4px 10px -1px rgba(0,0,0,0.2),inset -4px -4px 10px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px  rgb(255,255,255), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05)",
        item_next: "0 1px 10px rgba(12, 44, 92, 0.07)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        circular: {
          "0%": { "stroke-dashoffset": "51" },
          "100%": { "stroke-dashoffset": "0" },
        },
        fade_in: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fade_out: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        rotate: {
          "0%": { transform: "rotateZ(0deg)" },
          "100%": { transform: "rotateZ(360deg)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        circular: "circular 3s linear infinite",
        toggleHighlight: "toggleAnimation 9s linear infinite",
        fade_in: "fade_in 0.5s forwards",
        fade_out: "fade_out 0.5s forwards",
        text_rotation: "rotate 15s linear infinite",
      },
      backgroundImage: {
        header_img: "url('/assets/images/header_img.svg')",
        arrow_img: "url('/assets/icons/arrow-sidebar.svg')",
        footer_img: "url('/assets/images/footer_img.svg')",
        arrow_prev: 'url("/assets/icons/angle-left-icon.svg")',
        arrow_next: 'url("/assets/icons/angle-right-icon.svg")',
        comments_bg: 'url("/assets/images/comments_bg.svg")',
        about_us: 'url("/assets/images/about_us_bg.jpg")',
      },
      transitionProperty: {
        "max-height": "max-height",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
