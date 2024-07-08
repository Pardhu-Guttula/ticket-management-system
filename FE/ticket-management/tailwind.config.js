/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        card: "#dfe1f1",
        "normal-button": "#526bcc",
        "hover-button": "#5058e5",
        pageBG: "#f5f5f5",
      },
    },
  },
  plugins: [],
};
