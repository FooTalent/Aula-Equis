import imgAlumnoLogin from '../../src/aula-equis/components/assets/imgAlumnoLogin.svg'
import imgDocenteLogin from '../../src/aula-equis/components/assets/imgDocenteLogin.svg'
import imgTutorLogin from '../../src/aula-equis/components/assets/imgTutorLogin.svg'
import imgEscuelaLogin from '../../src/aula-equis/components/assets/imgEscuelaLogin.svg'
import { useLocation } from 'react-router-dom'

export const imgPath = () => {
  const { pathname } = useLocation()
  if (pathname === '/login-alumno') {
    return imgAlumnoLogin
  } else if (pathname === '/login-docente') {
    return imgDocenteLogin
  } else if (pathname === '/login-tutor') {
    return imgTutorLogin
  } else {
    return imgEscuelaLogin
  }
}
export const rolPath = () => {
  const { pathname } = useLocation()
  if (pathname === '/login-alumno') {
    return 'ALUMNO'
  } else if (pathname === '/login-docente') {
    return 'DOCENTE'
  } else if (pathname === '/login-tutor') {
    return 'TUTOR'
  } else {
    return 'ESCUELA'
  }
}
export const bgPath = () => {
  const { pathname } = useLocation()
  if (pathname === '/login-alumno') {
    return 'from-green-700 via-green-300 to-white'
  } else if (pathname === '/login-docente') {
    return 'from-blue-900 via-neutral-300'
  } else if (pathname === '/login-tutor') {
    return 'from-orange-400 via-orange-300'
  } else {
    return 'from-rose-400 via-rose-300'
  }
}

// export const imgPath = () =>
//   pathname === '/login-alumno'
//     ? imgAlumnoLogin
//     : pathname === '/login-docente'
//     ? imgDocenteLogin
//     : pathname === '/login-tutor'
//     ? imgTutorLogin
//     : imgEscuelaLogin
