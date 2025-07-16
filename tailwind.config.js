/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
    },
    container: {
      center: true,
      padding: '16px'
    },
    colors: {
      'yellow': "var(--yellow)",
      'blue': "var(--blue)",
      'green': "var(--green)",
      'orange': "var(--orange)",
      'white': "var(--white)",
      'black': "var(--black)",
    },
    
    extend: {
      fontFamily: {
        'lato': 'var(--primaryFont)',
      },
      spacing: {
         '15': '50px',
         '0.5': '2px'
      }
    },
  },
  plugins: [],
}

