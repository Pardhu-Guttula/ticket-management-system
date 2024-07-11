/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E0EDE4",
        secondary: "#83AF8C",
        textprimarycolor:"#666ee2",
        textsecondarycolor: "#5058e5",
        card: "#dfe1f1",
        "normal-button": "#526bcc",
        "hover-button": '#5058e5',
        textColor: '#666ee2',
        navBg: '#e0e0e0',
        selectedItemBG: '#d5d8f2',
        pageBg: '#f5f5f5',
        navHover: '#d5d8f2'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
