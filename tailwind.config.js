/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        sm:'375px',
        md:'768px',
        lg:'1024px',
        xl:'1280px',

      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
