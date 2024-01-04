/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF7979",
        secondary: "#38CC8B",
        third: "#5E54A4",
        fourth: "#3D3B48",
        customColor: {
          100: "#f0f0f0",
          200: "#e0e0e0",
          300: "#d0d0d0",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        mobile: "url('./src/components/bg-intro-mobile.png')",
      },
    },
  },
  plugins: [],
};
