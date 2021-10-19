const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: ["src/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amber: colors.amber
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
