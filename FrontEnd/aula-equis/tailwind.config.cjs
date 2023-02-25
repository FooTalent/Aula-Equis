/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        formLoginLg: '38.125em',
        formLoginMd: '27em',
        imgLoginLg: '46.25em',
        imgLoginMd: '41.125em',
        logoLoginLg: '18.904em',
        InputLg: '25.188em',
      },
      height: {
        formLoginLg: '33.438em',
        imgLoginLg: '52.5em',
        imgLoginMd: '36.188em',
      },
    },
  },
  plugins: [],
}
