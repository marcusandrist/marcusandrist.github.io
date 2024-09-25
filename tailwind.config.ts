import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'darkpurple': '#170B1E',
      'silver': '#DBD3D2',
      'lighterpalecreme':'#FFCFC6',
      'palecreme': '#E4C9BA',
      'bluegray': '#3A4A4C',
      'blue': '#1fb6ff',
      'black': '#000000',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#FFFFFF',
      'cyan': '#5BC0FF',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        slab: ['var(--font-roboto-slab)'],
        mono: ['var(--font-roboto-mono)'],
        daddytime: ['var(--font-daddytime)'],
        jaro : ['var(--font-jaro)'],
      },
      animation: {
        orbit: "orbit 14s infinite linear",
        dabar: "dabarf 11s infinite linear",
        dabarV2: "dabarf 11s linear",
        welcome: "welcome 4s linear",
      },
        keyframes: {
          welcome: {
            "0%" : {transform: "translate(45vw, 0vh) scale(.1)"},
            "100%" : {transform: "translate(0vw, 0vh) scale(1)"},
          },
          dabarf: {
            "0%" : {transform: "translate(80vw, 0vh)"},
            "10%" : {transform: "translate(20vw, 0vh)"},
            "50%" : {transform: "translate(-1vw, 0vh)"},
            "60%" : {transform: "translate(-66vw, 0vh)"},
            "100%" : {transform: "translate(-66vw, 0vh)"},
          },
          orbit: {
            "0%": {transform: "translate(0vw, 0vh) scale(1) z-index(50)",},
            "6%": {transform: "translate(18vw, 1.8vh) scale(1)",},
            "12%": {transform: "translate(36vw, 8.1vh) scale(1)",},
            "18%": {transform: "translate(49.5vw, 19.5vh) scale(1)",},
            "24%": {transform: "translate(54vw, 32.4vh) scale(1)",},
            "30%": {transform: "translate(45vw, 50.4vh) scale(1)",},
            "36%": {transform: "translate(27vw, 60.3vh) scale(1)",},
            "42%": {transform: "translate(18vw, 63vh) scale(1)",},
            "48%": {transform: "translate(0vw, 64.8vh) scale(1) z-50",},
            "54%": {transform: "translate(-18vw, 63vh) scale(1) z-50",},
            "60%": {transform: "translate(-36vw, 56.5vh) scale(1) z-50",},
            "66%": {transform: "translate(-45vw, 50vh) scale(1) z-50",},
            "72%": {transform: "translate(-54vw, 32.4vh) scale(1)",},
            "78%": {transform: "translate(-45vw, 14.5vh) scale(1)",},
            "84%": {transform: "translate(-36vw, 8.1vh) scale(1)",},
            "90%": {transform: "translate(-18vw, 1.8vh) scale(1)",},
            "100%": {transform: "translate(0vw, 0vh) scale(1)",},
        }

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
};
export default config;
