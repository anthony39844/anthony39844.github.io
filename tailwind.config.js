/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#212529",
        secondary: "#495057",
        tertiary: "#343A40",
        text: "#FFFFFF",
        "primary-light": "#F8F9FA",
        "secondary-light": "#E9ECEF",
        "tertiary-light" : "#CED4DA",
        "text-light": "#2f2f2f",
      },
      screens: {
        xs: "450px",
        sm: '640px'
      },
    },
  },
  plugins: [],
};