import { IoIosAlert, IoMdMail } from 'react-icons/io'
import logo from '../../components/assets/logo.svg'
import { Link } from 'react-router-dom'
import { consultarPath } from '../../../helpers'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const SendEmail = () => {
  const userRol = consultarPath()
  console.log(userRol)

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('El correo electrónico es inválido')
        .required('El correo electrónico es requerido'),
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
          <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-12 ">
            <div className="mt-6  sm:mt-12 xl:mt-[61px]">
              <Link className="">
                <img
                  className="w-[91px] h-[28px] md:w-[8.688rem] md:h-[2.938rem] xl:w-[17.938rem] xl:h-24"
                  src={logo}
                  alt=""
                />
              </Link>
            </div>
            {
              <nav className="hidden items-center justify-center gap-8 text-6xl font-medium ">
                <p className="text-white text-6xl" href="">
                  {userRol.rol}
                </p>
              </nav>
            }

            <div className="items-center text-xs mt-6 sm:mt-12 w-24 h-8 flex text-center justify-center rounded-lg bg-indigo-300   md:text-xl text-white md:w-40 md:h-12 lg:mt-14 xl:mt-[61px] ">
              <Link to={'/home'} className="px-8 py-2  md:py-3 md:px-20">
                Volver
              </Link>
            </div>
          </div>
        </header>
        <div className="mx-auto max-w-screen-xl  pl-0 pr-4 md:pl-0 sm:pr-6 sm:pl-0 xl:ml-0 xl:max-w-full ">
          {
            <div className="hidden md:flex md:justify-end md:mr-[15%] md:mb-20 md:mt-36 lg:mb-0 xl:mb-4 xl:mt-24 ">
              <nav className="flex items-center justify-center font-medium">
                <a className="text-white text-4xl md:text-[64px]" href="">
                  {userRol.rol}
                </a>
              </nav>
            </div>
          }

          <div className="grid grid-cols-1 gap-x-16 md:gap-x-0 gap-y-8 md:flex md:items-center md:justify-between lg:grid-cols-5">
            <div className="flex gap-[30px] mr-48 sm:gap-[120px] lg:col-span-2 lg:py-0 sm:mt-16">
              <img
                className="w-40 h-48 md:w-imgLoginMd md:h-imgLoginMd lg:w-imgLoginLg lg:h-imgLoginLg"
                src={userRol.img}
                alt=""
              />

              <p className=" md:hidden text-center text-white mt-20 text-4xl font-bold">
                {userRol.rol}
              </p>
            </div>

            <div
              className={`flex justify-center sm:rounded-lg  xl:mr-4 p-8 md:shadow-lg md:w-formLoginMd md:h-formLoginMd xl:w-[610px] lg:col-span-3 lg:p-12  md:bg-gradient-to-b ${userRol.bg}`}
            >

              <form className="mx-24 font-bold text-white">
                <h3 className="text-center   text-2xl">
                  Restablecer Contraseña
                </h3>
                <div className="">
                  <label htmlFor="pass1" className="pl-2 mb-2">
                    Nueva contraseña
                  </label>
                  <input
                    type="password"
                    id="pass1"
                    placeholder="Contraseña"
                    className="mb-3 font-normal pl-3 py-3 w-full rounded-xl"
                  />
                  <ul className="pl-5 text-[#303030] font-medium text-sm focus:h-0">
                    <legend className=" ">
                      Por razones de seguridad tu contraseña debe contener:
                    </legend>
                    <li>-Al menos 1 mayúscula</li>
                    <li>-Al menos 1 numero</li>
                    <li>-Al menos 8 caracteres</li>
                  </ul>
                </div>
                <div>
                  <label htmlFor="pass2">Repetir nueva contraseña</label>
                  <input
                    type="password"
                    id="pass2"
                    placeholder="Contraseña"
                    className="mb-3 font-normal pl-3 py-3 w-full rounded-xl"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#684D82]"
                >
                  Restablecer
                </button>
              </form>
              {/* <form

                onKeyDown={handleKeyDown}
                onSubmit={handleSubmit}
                className=" md:h-[26.5rem]"
              >
                <p className="hidden md:flex md:justify-center text-center text-sm text-white lg:text-2xl font-bold ">
                  RESTABLECER CONTRASEÑA
                </p>
                <p className="hidden md:flex md:justify-center text-center text-xs text-white lg:text-lg font-bold ">
                  Ingresa tu correo electrónico y te enviaremos un mail para
                  restablecer tu contraseña
                </p>
                <div className="grid grid-cols-1 gap-7 ">
                  <div className="">
                    <div className="">
                      <label className="text-[#FBFBFB] mb-2" htmlFor="email">
                        Email:
                      </label>
                      <input
                        type="email"
                        className="h-16 rounded-2xl border-2 border-gray-600  pr-12 shadow-sm w-full p-3 text-sm"
                        placeholder="Correo electrónico"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="grid justify-end -mt-9 mr-3">
                      <IoMdMail className="h-4 text-purple-700" />
                    </div>
                    {touched.email && errors.email && (
                      <div className="flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm">
                        {errors.email}
                        <IoIosAlert />
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    type="submit"
                    className="h-14 rounded-2xl  bg-yellow-500 text-sm cursor-pointer inline-block w-full mt-6  px-5 py-3 font-medium text-white lg:text-2xl"
                    value="Restablecer"
                  />
                </div>
                <div className="relative flex justify-center mt-2">
                  <p
                    className="text-xs font-normal text-center lg:text-xl"
                    href=""
                  >
                    <Link
                      to={`/login-${userRol.rol.toLowerCase()}`}
                      className="underline text-purple-700"
                    >
                      Cancelar
                    </Link>
                  </p>
                </div>
                <div className="flex justify-center mt-1">
                  <p className="flex flex-col md:block text-xs font-normal text-center">
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

              </form> */}

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SendEmail
