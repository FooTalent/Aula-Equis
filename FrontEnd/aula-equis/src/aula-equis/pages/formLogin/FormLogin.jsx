import { Formik, Form, Field } from 'formik'
import { IoMdMail } from 'react-icons/Io'
import { GoEyeClosed } from 'react-icons/Go'
import logo from '../../components/assets/logo.svg'
import imgLoginAlumno from '../../components/assets/imgLoginAlumno.svg'
import { Link } from 'react-router-dom'

const FormLogin = () => {
  return (
    <>
      <div className=" bg-gradient-to-b from-green-700 via-green-300 to-white min-h-screen">
        <header aria-label="Site Header">
          <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
            <div className="flex mt-12 mr-44 ">
              <button className="rounded-full " type="button">
                <img
                  className="md:w-56 md:h-16 md:mt-12 lg:mt-12 lg:w-logoLoginLg lg:h-24 "
                  src={logo}
                  alt=""
                />
              </button>
            </div>
            <nav className="hidden items-center justify-center gap-8 text-6xl font-medium lg:mt-14 lg:flex lg:w-0 lg:flex-1 lg:mr-64">
              <p className="text-white text-6xl" href="">
                ALUMNO
              </p>
            </nav>

            <div className="items-center text-xs mr-16  mt-6 w-24 h-8 flex text-center rounded-lg bg-indigo-300 md:mr-14 md:mt-16  md:text-xl text-white md:w-48 md:h-12 lg:w-52 lg:h-12 lg:mt-14 ">
              <Link className="px-8 py-2  md:py-3 md:px-20">Volver</Link>
            </div>
          </div>

          <div className="  lg:hidden">
            <nav className="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium">
              <a
                className="flex-shrink-0 pl-4 text-white md:text-5xl lg:text-6xl"
                href=""
              >
                ALUMNO
              </a>
            </nav>
          </div>
        </header>
        <div className="flex justify-between   relative ">
          <div className="absolute flex  w-1/2">
            <img
              className=" w-56 h-48 md:w-imgLoginMd md:h-imgLoginMd  lg:w-imgLoginLg lg:h-imgLoginLg"
              src={imgLoginAlumno}
              alt=""
            />
          </div>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
          >
            {() => (
              <div className="mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:mr-24   ">
                <Form
                  action=""
                  className="absolute  right-24  mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 md:w-formLoginMd md:h-formLoginLg lg:p-8 lg:w-formLoginLg bg-gradient-to-b from-green-700 via-green-300 to-white"
                >
                  <p className="text-center mt-12 text-white text-2xl font-bold">
                    INICIAR SESIÓN
                  </p>

                  <div>
                    <label for="email" className="sr-only">
                      Email
                    </label>
                    <div className="flex relative justify-center">
                      <Field
                        type="email"
                        className="w-InputLg h-10 rounded-2xl border-2 border-gray-600 p-4 pr-12 text-sm shadow-sm"
                        placeholder="Correo electrónico"
                        value=""
                      />

                      <span className="absolute inset-y-0 right-0 md:right-4 grid place-content-center px-4 lg:right-24">
                        <IoMdMail />
                      </span>
                    </div>
                  </div>
                  <div>
                    <label for="password" className="sr-only">
                      Password
                    </label>
                    <div className="relative flex justify-center">
                      <Field
                        type="password"
                        className=" w-InputLg h-10 rounded-2xl border-2 border-gray-600 p-4 pr-12 text-sm shadow-sm"
                        placeholder="Contraseña"
                        value=""
                      />
                      <span className="absolute inset-y-0 right-0 grid place-content-center px-4 md:right-4 lg:right-24">
                        <GoEyeClosed />
                      </span>
                    </div>
                  </div>
                  <div className="flex relative mt-6 md:left-36 lg:left-56 text-xl text-purple-700">
                    <Link className="underline" href="">
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>
                  <div className="flex relative justify-center">
                    <Field
                      type="submit"
                      className="block lg:w-InputLg h-14 mt-10 rounded-2xl  bg-yellow-500 px-5 py-3 text-sm font-medium text-white"
                      value="Iniciar sesión"
                    />
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}

export default FormLogin
