/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        greenDarkAlumno: 'rgba(0, 172, 107, 1)',
        greenLightAlumno: 'rgba(0, 172, 107, 0.239)',
        blueDarkDocente: 'rgba(28, 67, 150, 1)',
        blueLightDocente: 'rgba(28, 67, 150, 0.239)',
        orangeDarkTutor: 'rgba(247, 132, 0, 1)',
        orangeLightTutor: 'rgba(247, 132, 0, 0.239)',
        redDarkEscuela: 'rgba(208, 89, 96, 1)',
        redLightEscuela: 'rgba(208, 89, 96, 0.0446)',
        colorDarkLanding: ' rgba(255, 197, 98, 1)',
        colorLightLanding: 'rgba(255, 197, 98, 0.182)',
      },
      width: {
        formLoginLg: '38.125em',

        formLoginMd: '27.125rem',
        imgLoginLg: '43rem',
        imgLoginMd: '26.625rem',

        logoLoginLg: '18.904em',
        InputLg: '25.188em',
      },
      height: {
        formLoginLg: '33.438em',

        formLoginMd: '33.438rem',
        imgLoginLg: '44em',
        imgLoginMd: '26.5rem',

      },
    },
  },
  plugins: [],
}
