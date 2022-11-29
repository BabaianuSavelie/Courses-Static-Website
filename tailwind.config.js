/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      // backgroundImage: {
      //   'main': "url('../assets/imgs/photo-1587620962725-abab7fe55159.avif')",
      // },
      backgroundColor: {
        'primary': "#242145",
        'second': "#e7005e",
        'main': "#2A2753",
      },
      fontFamily: {
        'primary': ['Poppins'],
        'second': ['Archivo Black'],
      }
    },
  },
  plugins: [],
}
