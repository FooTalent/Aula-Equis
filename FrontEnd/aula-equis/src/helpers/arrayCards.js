import Estudiante from '../aula-equis/components/assets/imgAlumnoLogin.svg'
import Docente from '../aula-equis/components/assets/imgDocenteLogin.svg'
import Tutor from '../aula-equis/components/assets/imgTutorLogin.svg'
import Escuela from '../aula-equis/components/assets/imgEscuelaLogin.svg'
const clas =
  'rounded-xl md:justify-items-center text-white font-extrabold md:text-center xl:hover:scale-125 xl:transition-all xl:max-h-[401px] 2xl:min-h-[536px] text-2xl '
export const arrayCards = [
  {
    id: 1,
    img: Estudiante,
    color: 'bg-greenDarkAlumno',
    shadows: '#00AC6B',
    clas,
    textColor:
      'text-greenDarkAlumno flex items-center w-full justify-center rounded-md bg-white',
    text: 'Ingresar ',
    name: 'Estudiante',
    path: '/login-alumno',
  },
  {
    id: 2,
    img: Docente,
    color: 'bg-blueDarkDocente',
    shadows: '#1C4396',
    clas,
    textColor:
      'text-blueDarkDocente flex items-center w-full justify-center rounded-md bg-white',
    text: 'Ingresar',
    name: 'Docente',
    path: '/login-docente',
  },
  {
    id: 3,
    img: Tutor,
    color: 'bg-orangeDarkTutor',
    shadows: '#F78400',
    clas,
    textColor:
      'text-orangeDarkTutor flex items-center w-full justify-center rounded-md bg-white',
    text: 'Ingresar',
    name: 'Tutor',
    path: '/login-tutor',
  },
  {
    id: 4,
    img: Escuela,
    color: 'bg-redDarkEscuela',
    shadows: '#D05960',
    clas,
    textColor:
      'text-redDarkEscuela flex items-center w-full justify-center rounded-md bg-white',
    text: 'Ingresar',
    name: 'Escuela',
    path: '/login-escuela',
  },
]
