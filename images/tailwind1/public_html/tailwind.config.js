module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {

    fontSize: {
      title: `3rem;`,
      paragraph: `1rem;`
    },
    container: {
      center: "true",
      // padding: {
      //   DEFAULT: '2rem',
      //   '2xl': "4rem",
      // },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1025px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: {
          500: '#27272A;',
          600: 'rgb(113 113 122);',
          800: '#52525B;',
          900: '#33ada7;',
          100: '#ffffff;',
          50: '#000000'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        'xl': "1280px"
      },
    },
  },
  plugins: [],
}
