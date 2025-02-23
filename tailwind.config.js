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
        xxs: "300px",
        xs: "450px",
        sm: '640px',
        md:	"768px",
        lg:	"1024px",
        xl:	"1280px"
      },
      boxShadow: {
        custom: "10px 10px 20px rgba(0, 0, 0, 0.3), -10px -10px 20px rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};