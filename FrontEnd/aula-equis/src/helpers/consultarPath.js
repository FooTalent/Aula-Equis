import imgAlumnoLogin from '../../src/aula-equis/components/assets/imgAlumnoLogin.svg'
import imgDocenteLogin from '../../src/aula-equis/components/assets/imgDocenteLogin.svg'
import imgTutorLogin from '../../src/aula-equis/components/assets/imgTutorLogin.svg'
import imgEscuelaLogin from '../../src/aula-equis/components/assets/imgEscuelaLogin.svg'
import { useLocation } from 'react-router-dom'

export const consultarPath = () => {
  const { pathname } = useLocation()
  let userRol = {}
  if (pathname === '/login-alumno') {
    userRol = {
      img: imgAlumnoLogin,
      rol: 'ALUMNO',
      bg: 'from-greenDarkAlumno via-greenLightAlumno to-white',
    }
    return userRol
  } else if (pathname === '/login-docente') {
    userRol = {
      img: imgDocenteLogin,
      rol: 'DOCENTE',
      bg: 'from-blueDarkDocente via-blueLightDocente',
    }
    return userRol
  } else if (pathname === '/login-tutor') {
    userRol = {
      img: imgTutorLogin,
      rol: 'TUTOR',
      bg: 'from-orangeDarkTutor via-orangeLightTutor',
    }
    return userRol
  } else {
    userRol = {
      img: imgEscuelaLogin,
      rol: 'ESCUELA',
      bg: 'from-redDarkEscuela via-redLightEscuela',
    }
    return userRol
  }
}
