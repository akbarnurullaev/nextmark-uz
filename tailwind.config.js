/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./public/**/*.html",
  ],
  theme: {
    colors: {
      'dark': '#0A0A0A',
      'orange': '#E9562A',
      'white': '#FFFFFF',
      'lightCream': '#DADADA',
      'cream': '#8B8B8B',
      'lightGrey': '#636363',
      'grey': '#1B1B1B',
      'darkGrey': '#121212',
    },
    fontFamily: {
      sans: ['RF Dewi Expanded', 'sans-serif'],
      serif: ['RF Dewi Expanded', 'serif'],
    },
    extend: {
      screens: {
        'sm-mobile': '400px',

        'mobile': '520px',

        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '256': '64rem',
        '288': '76rem',
        '384': '96rem',
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [
  ],
}
