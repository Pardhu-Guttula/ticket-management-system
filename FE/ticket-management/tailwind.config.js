/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        card: "#dfe1f1",
        "normal-button": "#526bcc",
        "hover-button": "#5058e5",
        textColor: "#666ee2",
        navBg: "#e0e0e0",
        selectedItemBG: "#d5d8f2",
        pageBg: "#f5f5f5",
        "hover-color": "#d5d8f2",
      },
      fontFamily: {
        Montserrat: "Montserrat",
      },
    },
  },
  plugins: [],
};
