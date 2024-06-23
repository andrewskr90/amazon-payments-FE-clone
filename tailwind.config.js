/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#146eb4',
        darkBlue: '#232F3E',
        orange: '#FF9900',
        gray: '#E3E6E6'
      }
    },
  },
  plugins: [],
}

