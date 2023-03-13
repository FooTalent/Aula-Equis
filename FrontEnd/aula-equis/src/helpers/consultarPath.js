import imgAlumnoLogin from '../../src/aula-equis/components/assets/imgAlumnoLogin.svg'
import imgDocenteLogin from '../../src/aula-equis/components/assets/imgDocenteLogin.svg'
import imgTutorLogin from '../../src/aula-equis/components/assets/imgTutorLogin.svg'
import imgEscuelaLogin from '../../src/aula-equis/components/assets/imgEscuelaLogin.svg'
import { useLocation } from 'react-router-dom'

export const consultarPath = () => {
  const { pathname } = useLocation()
  let userRol = {}
  if (pathname === '/login-alumno' || pathname === '/login-send-email-alumno') {
    userRol = {
      img: imgAlumnoLogin,
      rol: 'ALUMNO',
      bg: 'from-greenDarkAlumno via-greenLightAlumno to-white',
      path: 'alumno',
    }
    return userRol
  } else if (
    pathname === '/login-docente' ||
    pathname === '/login-send-email-docente'
  ) {
    userRol = {
      img: imgDocenteLogin,
      rol: 'DOCENTE',
      bg: 'from-blueDarkDocente via-blueLightDocente',
      path: 'empleado',
    }
    return userRol
  } else if (
    pathname === '/login-tutor' ||
    pathname === '/login-send-email-tutor'
  ) {
    userRol = {
      img: imgTutorLogin,
      rol: 'TUTOR',
      bg: 'from-orangeDarkTutor via-orangeLightTutor',
      path: 'tutor',
    }
    return userRol
  } else if (
    pathname === '/login-escuela' ||
    pathname === '/login-send-email-escuela'
  ) {
    userRol = {
      img: imgEscuelaLogin,
      rol: 'ESCUELA',
      bg: 'from-redDarkEscuela via-redLightEscuela',
      path: 'escuela',
    }
    return userRol
  }
}
