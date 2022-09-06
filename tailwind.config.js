/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "test-img":
          "url('/src/credit-card/sample2/public/images/cc_cover.jpg')",
      },
      colors: {
        primaryColor: "#d7e8d7",
        oliveGreen: "#466443",
        secondaryColor: "#f9fcf8",
      },
    },
  },
  plugins: [],
};
