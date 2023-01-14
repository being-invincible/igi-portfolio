/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'cultured': '#F5F5F5',
      'oxford-blue': '#002049',
      'crayola' : '#ECBE3F',
      'mountain-pink' : '#A1869E',
      'pale-purple' : '#E9DBE7',
      'languid-lavender' : '#DAC9D8',
      'rhythm' : '#797596',
      'cadet-blue' : '#729EA1',
      'platinum' : '#E5E5E5',
      'orange-web' : '#FCA311',
      'smoky-black' : '#111111',
      'ebony' : '#595A4A',
      'green' : '#006B3D'
    },
    extend: {
      fontFamily: {
        sora: "sora",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}