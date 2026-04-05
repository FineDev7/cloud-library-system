/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // Blue
        secondary: '#FFFFFF', // White
      },
      backdropFilter: {
        none: 'none',
        sm: 'saturate(180%) blur(20px)',
        DEFAULT: 'saturate(180%) blur(30px)',
        lg: 'saturate(180%) blur(40px)',
      },
      animation: {
        spin: 'spin 1s linear infinite',
        bounce: 'bounce 1s infinite',
      },
    },
  },
};