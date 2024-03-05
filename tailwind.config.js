const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [addDynamicIconSelectors(), 'prettier-plugin-tailwindcss'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#FD3D57',
        'primary-color2': '#3498db',
        'primary-color3': '#1abc9c',
        'primary-color4': '#f79f1f',
        'secondary-color' : '#1e293b',
        'tertiary-color' : '#f4cad0',
        'light-black' : '#464545',
        'hero-bg-pink' : 'rgba(253, 61, 87, 0.19)',
        'hero-bg-gray' : '#cccccc',
        'hero-bg-blue' : '#7cc8f8ba',
        'light-gray-price' : '#687188;',
      },
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
      },
      transitionProperty: {
        'drop-in' : ['all 0.2s cubic-bezier(0.5, 0, 0, 1.25), opacity 0.15s ease-out'],
      },
      boxShadow: {
        "light-shadow": '0 0 5px #00000020;',
        "default": '0px 5px 11px rgb(0 0 0 / 0.32)',
      animation: {
        'spin-slow': 'spin 3.5s linear infinite',
      }
    },
    
  },
}
}