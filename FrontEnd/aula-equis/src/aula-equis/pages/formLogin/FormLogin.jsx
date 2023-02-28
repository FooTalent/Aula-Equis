import { IoIosAlert, IoIosLock, IoIosUnlock, IoMdMail } from 'react-icons/Io'
import logo from '../../components/assets/logo.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { consultarPath } from '../../../helpers'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const FormLogin = () => {
  const [hidden, setHidden] = useState('password')
  const [imgPass, setImgPass] = useState(
    <IoIosLock className="h-4 text-purple-700" />
  )

  const userRol = consultarPath()
  console.log(userRol)
  const typeInput = () => {
    if (hidden === 'password') {
      setHidden('text')
      setImgPass(<IoIosUnlock className="h-4 text-purple-700" />)
    } else {
      setHidden('password')
      setImgPass(<IoIosLock className="h-4 text-purple-700" />)
    }
  }
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('El correo electrónico es inválido')
        .required('El correo electrónico es requerido'),
      password: Yup.string()
        .required('La contraseña es requerida')
        .min(3, 'La contraseña debe tener al menos 3 caracteres'),
    }),
    onSubmit: (values) => {
      console.log(values)

      axios
        .post(
          `https://aulaequis.onrender.com/api/auth/${userRol.path}/login`,
          values
        )
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  })

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSubmit()
    }
  }
  const { handleSubmit, handleChange, handleBlur, touched, errors } = formik

  return (
    <>
      <div className={`bg-gradient-to-b ${userRol.bg}`}>
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
                  {userRol.rol}
                </p>
              </nav>
            }

            <div className="items-center text-xs mt-6 mr-3 w-24 h-8 flex text-center rounded-lg bg-indigo-300 md:mr-14 md:mt-16  md:text-xl text-white md:w-48 md:h-12 lg:w-52 lg:h-12 lg:mt-14 ">
              <Link to={'/home'} className="px-8 py-2  md:py-3 md:px-20">
                Volver
              </Link>
            </div>
          </div>

          {
            <div className="hidden sm:block lg:hidden">
              <nav className="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium">
                <a
                  className="flex-shrink-0 pl-4 text-white text-4xl md:text-5xl lg:text-6xl"
                  href=""
                >
                  {userRol.rol}
                </a>
              </nav>
            </div>
          }
        </header>
        <div className="mt-16 md:flex md:justify-between">
          <div className="flex justify-between ">
            <img className="w-40 h-48 " src={userRol.img} alt="" />
            <p className="hidden sm:flex text-center mt-12 text-white text-2xl font-bold mr-20">
              INICIAR SESIÓN
            </p>
            <p className=" sm:hidden text-center mt-12 text-white text-2xl font-bold mr-20">
              {userRol.rol}
            </p>
          </div>
          <div className="mx-auto sm:px-6">
            <div className="mx-auto sm:px-6">
              <form
                onKeyDown={handleKeyDown}
                onSubmit={handleSubmit}
                className="w-full flex flex-col items-center"
              >
                <div className="flex">
                  <div className="flex flex-col">
                    <label className="text-[#FBFBFB] mb-2" htmlFor="email">
                      Email:
                    </label>
                    <input
                      type="email"
                      className="w-52 h-16 rounded-2xl border-2 border-gray-600 p-4 pr-12 text-sm shadow-sm"
                      placeholder="Correo electrónico"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.email && errors.email && (
                      <div className="flex flex-row-reverse justify-end  text-red-500 text-sm">
                        {errors.email}
                        <IoIosAlert />
                      </div>
                    )}
                  </div>
                  <div className=" mt-[53px] -ml-[2.5rem]">
                    <IoMdMail className="h-4 text-purple-700" />
                  </div>
                </div>
                <div className="flex">
                  <div className=" flex flex-col  mt-6">
                    <label htmlFor="password" className="text-[#FBFBFB] mb-2">
                      Contraseña:
                    </label>
                    <input
                      type={hidden}
                      className="w-52 h-16 rounded-2xl border-2 border-gray-600 p-4 pr-12 text-sm shadow-sm"
                      placeholder="Contraseña"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.password && errors.password && (
                      <div className="flex flex-row-reverse justify-end text-red-500 text-sm">
                        {errors.password}
                        <IoIosAlert />
                      </div>
                    )}
                  </div>
                  <button onClick={typeInput} className="mt-8 -ml-6">
                    {imgPass}
                  </button>
                </div>
                <div className="flex  justify-center mt-10">
                  <input
                    type="submit"
                    className="block w-52 lg:w-InputLg h-14  rounded-2xl  bg-yellow-500 px-5 py-3 text-sm font-medium text-white cursor-pointer"
                    value="Iniciar sesión"
                  />
                </div>
              </form>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default FormLogin
