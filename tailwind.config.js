/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
   // These paths are just examples, customize them to match your project structure
  purge: [
    './public//*.html',
    './src/**/*.{js,jsx,ts,tsx}',],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 /* theme: {
    extend: {
      colors: {
        'black': '#2F2F2F',
      },
    },
  },*/
  plugins: [],
}