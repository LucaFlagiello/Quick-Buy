/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-color': '#FD3D57',
        'secondary-color' : '#1e293b',
        'tertiary-color' : '#f4cad0',
      },
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
      },
    },
    
  },
  plugins: [],
}

