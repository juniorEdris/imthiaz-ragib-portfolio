/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      app_shadow: "0px 0px 8px 2px rgba(0,0,0,0.1)",
      // rest of the box shadow values
    },
    fontFamily: {
      fjalla: ["Fjalla One"],
      nunito: ["Nunito"],
    },
    extend: {
      backgroundImage: {},
      colors: {
        "app-theme": "#00BCD4",
        "app-light": "#FFFFFF",
        "app-dark": "#111",
        "app-secondary-dark": "#212529",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
});
