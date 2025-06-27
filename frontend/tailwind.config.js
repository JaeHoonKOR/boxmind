/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#E0E5EC',
        text: '#303030'
      },
      fontFamily: {
        sans: ['\'SUIT Variable\', \"Noto Sans KR\", sans-serif']
      },
      boxShadow: {
        neu: "4px 4px 8px #A3B1C6, -4px -4px 8px #FFFFFF",
        "neu-inset": "inset 4px 4px 8px #A3B1C6, inset -4px -4px 8px #FFFFFF"
      }
    },
  },
  plugins: [],
};
