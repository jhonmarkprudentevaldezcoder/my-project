/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    maxWidth: {
      contentContainer: '1140px',
      container: '1440px',
      containerSmall: '1024px',
      containerxs: '768px',
    },
    boxShadow: {
      navbarShadow: '0 10px 30px -10px rgba(2,12,27,0.7)',
    },
    extend: {
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
      },
      fontFamily: {
        bodyFont: ['Montserrat', 'sans-serif'],
        titleFont: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
