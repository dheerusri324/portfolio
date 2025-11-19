/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          dark: '#0a192f',
          medium: '#112240',
          light: '#1d3557',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'wave': 'wave 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(20px)' },
        },
      },
    },
  },
  plugins: [],
}
