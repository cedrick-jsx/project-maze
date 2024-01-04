/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titan: "Titan",
        concert: "Concert",
      },
      dropShadow: {
        custom: ["0 0 1px #000000", "0 0 1px #000000", "0 0 1px #000000"],
        textShadow: [
          "0 0 1px #27005d",
          "0 0 1px #27005d",
          "0 0 1px #27005d",
          "0 0 1px #27005d",
          "0 0 1px #27005d",
          "0 0 1px #27005d",
          "0 0 1px #27005d",
          "0 0 1px #27005d",
        ],
      },
      backgroundImage: {
        cedrick: `url("./src/assets/img/teams/cedrick.png")`,
        maze: `url("./src/assets/img/background/andromeda.png")`,
        end: `url("./src/assets/img/gif/end.gif")`,
      },
      keyframes: {
        widthSize: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        faFade: "fa-fade 1000ms linear infinite",
        widthChange: "widthSize 300ms cubic-bezier(0.4, 0, 0.2, 1)",
      },
      screens: {
        "4xs": { max: "299.9px" },
        "3xs": { min: "300px", max: "399.9px" },
        "2xs": { min: "400px", max: "499.9px" },
        xs: { min: "500px", max: "639.9px" },
        sm: { min: "640px", max: "767.9px" },
        md: { min: "768px", max: "1023.9px" },
        lg: { min: "1024px", max: "1279.9px" },
        xl: { min: "1280px", max: "1535.9px" },
        "2xl": { min: "1536px" },
      },
    },
  },
  plugins: [],
};
