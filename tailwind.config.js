/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "nua-white-main": "#FEFEFE",
      "nua-purple-main": "#311868",
      "nua-purple-secondary": "#5325a0",
      "nua-purple-aux": "#9f7eee",
      "nua-purple-aux-transparent": "rgba(159,126,238, 0.5)",
      "nua-green-secondary": "#2f9ea2",
      "nua-green-aux": "#92d5ce",
      "nua-green-aux-transparent": "rgba(146,213,206,0.5)",
    },
    fontFamily: {
      title: ["Century Gothic", "sans-serif"],
      text: ["Raleway", "sans-serif"],
    },
    screens: {
      sm: { max: "1000px" },
    },
  },
  plugins: ["@tailwindcss/jit"],
};
