import { Formik, Form, Field } from 'formik'
import { IoIosLock, IoIosUnlock, IoMdMail } from 'react-icons/Io'
import logo from '../../components/assets/logo.svg'
/* import imgAlumnoLogin from '../../components/assets/imgAlumnoLogin.svg'
import imgDocenteLogin from '../../components/assets/imgDocenteLogin.svg'
import imgTutorLogin from '../../components/assets/imgTutorLogin.svg'
import imgEscuelaLogin from '../../components/assets/imgEscuelaLogin.svg' */
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { bgPath, imgPath, rolPath } from '../../../helpers'

const FormLogin = () => {
  // const { pathname } = useLocation()
  // const [img, setImg] = useState('')
  // const [bg, setBg] = useState('')
  // const [rol, setRol] = useState('')
  const [hidden, setHidden] = useState('password')
  const [imgPass, setImgPass] = useState(
    <IoIosLock className="h-4 text-purple-700" />
  )
  /* const consularPath = () => {
    if (pathname === '/login-alumno') {
      setImg(imgAlumnoLogin)
      setBg('bg-gradient-to-b from-green-700 via-green-300 to-white')
      setRol('ALUMNO')
    } else if (pathname === '/login-docente') {
      setImg(imgDocenteLogin)
      setBg('bg-gradient-to-b from-blue-900 via-neutral-300')
      setRol('DOCENTE')
    } else if (pathname === '/login-tutor') {
      setImg(imgTutorLogin)
      setBg('bg-gradient-to-b from-orange-400 via-orange-300')
      setRol('TUTOR')
    } else if (pathname === '/login-escuela') {
      setImg(imgEscuelaLogin)
      setBg('bg-gradient-to-b from-rose-400 via-rose-300')
      setRol('ESCUELA')
    }
  } */

  /* useEffect(() => {
    consularPath()
  }, []) */

  console.log(imgPath())

  const typeInput = () => {
    if (hidden === 'password') {
      setHidden('text')
      setImgPass(<IoIosUnlock className="h-4 text-purple-700" />)
    } else {
      setHidden('password')
      setImgPass(<IoIosLock className="h-4 text-purple-700" />)
    }
  }

  return (
    <>
      <div className={`bg-gradient-to-b ${bgPath()}`}>
        <header>
          <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
            <div className="mt-6  sm:mt-12">
              <Link className="">
                <img
                  className="w-[90px] h-8 sm:w-56 sm:h-[4.625rem]"
                  src={logo}
                  alt=""
                />
              </Link>
            </div>
            {
              <nav className="hidden items-center justify-center gap-8 text-6xl font-medium lg:mt-14 lg:flex lg:w-0 lg:flex-1 lg:mr-64">
                <p className="text-white text-6xl" href="">
                  {rolPath()}
                </p>
              </nav>
            }

            <div className="items-center text-xs mt-6 mr-3 w-24 h-8 flex text-center rounded-lg bg-indigo-300 md:mr-14 md:mt-16  md:text-xl text-white md:w-48 md:h-12 lg:w-52 lg:h-12 lg:mt-14 ">
              <Link to={'/home'} className="px-8 py-2  md:py-3 md:px-20">
                Volver
              </Link>
            </div>
          </div>

          <div className="  lg:hidden">
            <nav className="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium">
              <a
                className="flex-shrink-0 pl-4 text-white text-4xl md:text-5xl lg:text-6xl"
                href=""
              >
                {rolPath()}
              </a>
            </nav>
          </div>
        </header>
        <div className="mt-16 md:flex md:justify-between">
          <div className="flex justify-between ">
            <img className="w-40 h-48 " src={imgPath()} alt="" />
            <p className="text-center mt-12 text-white text-2xl font-bold mr-20">
              INICIAR SESIÓN
            </p>
          </div>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
          >
            {() => (
              <div className="mx-auto sm:px-6">
                <Form action="" className="w-full flex flex-col items-center">
                  <div className="flex">
                    <div className="flex flex-col">
                      <label className="text-[#FBFBFB] mb-2" htmlFor="email">
                        Email:
                      </label>
                      <Field
                        type="email"
                        className="w-52 h-16 rounded-2xl border-2 border-gray-600 p-4 pr-12 text-sm shadow-sm"
                        placeholder="Correo electrónico"
                        value=""
                        name="email"
                      />
                    </div>
                    <div className="mt-[53px] -ml-6">
                      <IoMdMail className="h-4 text-purple-700" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className=" flex flex-col  mt-6">
                      <label htmlFor="password" className="text-[#FBFBFB] mb-2">
                        Contraseña:
                      </label>
                      <Field
                        type={hidden}
                        className="w-52 h-16 rounded-2xl border-2 border-gray-600 p-4 pr-12 text-sm shadow-sm"
                        placeholder="Contraseña"
                        value=""
                        name="password"
                      />
                    </div>
                    <button onClick={typeInput} className="mt-16 -ml-6">
                      {/* <IoIosLock className="h-4" /> */}
                      {imgPass}
                    </button>
                  </div>
                  <div className="flex  justify-center mt-10">
                    <Field
                      type="submit"
                      className="block w-52 lg:w-InputLg h-14  rounded-2xl  bg-yellow-500 px-5 py-3 text-sm font-medium text-white"
                      value="Iniciar sesión"
                    />
                  </div>
                </Form>
                <div className="relative flex justify-center mt-3">
                  <p className="text-xs font-normal text-center" href="">
                    ¿Olvidaste tu contraseña?{' '}
                    <Link className="underline text-purple-700">
                      Restablecer constraseña
                    </Link>
                  </p>
                </div>
                <div className="flex justify-center mt-6">
                  <p className="flex flex-col text-xs font-normal text-center">
                    Al Iniciar Sesión, estas aceptando los{' '}
                    <Link className="underline text-purple-700">
                      Términos y condiciones
                    </Link>{' '}
                    y nuestras políticas sobre{' '}
                    <Link className="underline text-purple-700">
                      Protección de Datos.
                    </Link>
                  </p>
                </div>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}

export default FormLogin
