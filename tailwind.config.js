/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        'plusJakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'righteous': ['Righteous', 'cursive'],
        'ubuntu':['Ubuntu', 'sans-serif']
      },
    },
  },
  plugins: [],
}

