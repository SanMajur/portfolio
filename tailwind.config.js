/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
        padding: {
          DEFAULT: '1.5rem',
          md: '3rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          md: "48rem",
          lg: "64rem",
          xl: "70.25rem",
          "2xl": "70.25rem",
        },
    },
    extend: {
      fontFamily: {
        Caramel: 'Caramel'
      }
    },
  },
  plugins: [],
}