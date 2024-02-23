/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-color': '#FD3D57',
        'secondary-color' : '#1e293b',
        'tertiary-color' : '#f4cad0',
        'light-black' : '#464545',
      },
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
      },
      transitionProperty: {
        'drop-in' : ['all 0.2s cubic-bezier(0.5, 0, 0, 1.25), opacity 0.15s ease-out'],
      }
    },
    
  },
  plugins: [],
}

