/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        formLoginLg: '38.125em',
        formLoginMd: '27em',
        imgLoginLg: '43em',
        imgLoginSm: '10em',
        imgLoginMd: '26em',
        logoLoginLg: '18.904em',
        InputLg: '25.188em',
      },
      height: {
        formLoginLg: '33.438em',
        imgLoginLg: '44em',
        imgLoginSm: '12em',
        imgLoginMd: '33.5em',
      },
    },
  },
  plugins: [],
}
