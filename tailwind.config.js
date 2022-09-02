/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#d7e8d7",
        oliveGreen: "#466443",
        secondaryColor: "#f9fcf8",
        gradient:
          "linear-gradient(68.44deg, #280537 0%, #56034C 18.54%, #890058 41.98%, #BC005B 66.98%, #EB1254 100%)",
      },
    },
  },
  plugins: [],
};
