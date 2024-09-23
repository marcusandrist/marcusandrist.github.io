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
      'lighterpalecreme':'#FFCFC6',
      'palecreme': '#E4C9BA',
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
      },
      animation: {
        blob: "blob 7s infinite",
        blobber: "blobber 1s infinite",
        orbit: "orbit 14s infinite linear",
        dabar: "dabar 15s infinite linear",
        dabar2: "dabar2 11s infinite linear",
      },
        keyframes: {
          dabar2: {
            "0%" : {transform: "translate(80vw, 0vh)"},
            "10.5%" : {transform: "translate(35vw, 0vh)"},
            "22%" : {transform: "translate(11vw, 0vh)"},
            "29%" : {transform: "translate(-1vw, 0vh)"},
            "39.5%" : {transform: "translate(-46vw, 0vh)"},
            "50%" : {transform: "translate(-66vw, 0vh)"},
            "100%" : {transform: "translate(-66vw, 0vh)"},
          },
          dabar: {
            "0%" : {transform: "translate(90vw, 0vh)"},
            "7%" : {transform: "translate(45vw, 0vh)"},
            "48%" : {transform: "translate(0vw, 0vh)"},
            "55%" : {transform: "translate(-35vw, 0vh)"},
            "80%" : {transform: "translate(-60vw, 0vh)"},
            "100%" : {transform: "translate(-80vw, 0vh)"},
          },
          blob: {
            "0%": {
              transform: "translate(0px, 0px) scale(1)",
            },
            "33%": {
              transform: "translate(30px, -50px) scale(2)",
            },
            "66%": {
              transform: "translate(-20px, 20px) scale(0.9)",
            },
            "100%": {
              transform: "tranlate(0px, 0px) scale(1)",
            },
          },
          blobber: {
            "0%": {
              transform: "translate(-100px, 200px) scale(1)",
            },
            "33%": {
              transform: "translate(30px, -50px) scale(1.1)",
            },
            "66%": {
              transform: "translate(-20px, 20px) scale(0.9)",
            },
            "100%": {
              transform: "tranlate(0px, 0px) scale(1)",
            },
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
