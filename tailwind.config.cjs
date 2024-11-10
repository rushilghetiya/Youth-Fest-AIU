/** @type {import('tailwindcss').Config} */

const CUSTOM_CREAM = "#f8f7f3";
const CUSTOM_BLUE = "#003f6A";

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inria: ['"Inria Serif"', "serif"],
      },
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        md: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "3px 3px 6px rgba(0, 0, 0, 0.5)",
        xl: "4px 4px 8px rgba(0, 0, 0, 0.5)",
      },
      colors: {
        custom: {
          blue: CUSTOM_BLUE,
          cream: CUSTOM_CREAM,
        },
        font: {
          primary: "#005b8e",
          secondary: "#006A67",
          golden: "#be994a",
          tertiary: "#97c0bc",
        },
      },
      backgroundImage: {
        pattern: "url('/moroccan-flower.png')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-sm": {
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-md": {
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-lg": {
          textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-xl": {
          textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-right-sm": {
          textShadow: "2px 0 2px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-right-md": {
          textShadow: "4px 0 4px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-right-lg": {
          textShadow: "6px 0 6px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-right-xl": {
          textShadow: "8px 0 8px rgba(0, 0, 0, 0.5)",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
