/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titan: "Titan",
      },
      dropShadow: {
        custom: ["0 0 1px #000000", "0 0 1px #000000", "0 0 1px #000000"],
      },
      backgroundImage: {
        cow: `url("./src/img/emoji/cow-face.webp")`,
        cedrick: `url("./src/img/teams/cedrick.png")`,
      },
      animation: {
        faFade: "fa-fade 1000ms linear infinite",
      },
    },
  },
  plugins: [],
};
