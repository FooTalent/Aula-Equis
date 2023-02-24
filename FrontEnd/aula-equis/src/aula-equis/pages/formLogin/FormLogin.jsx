import { Formik, Form, Field } from 'formik'
import { IoMdMail } from 'react-icons/Io'
// import logo from '../assets/logo.svg'

const FormLogin = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-green-600 via-green-300 to-white min-h-screen">
        <header aria-label="Site Header">
          <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
            <div className="flex w-0 flex-1 ">
              <button className="rounded-full  p-2 text-gray-600" type="button">
                {/* <img src={logo} alt="" /> */}
              </button>
            </div>
            <nav
              aria-label="Site Nav"
              className="hidden items-center justify-center gap-8 text-sm font-medium lg:flex lg:w-0 lg:flex-1"
            >
              <a className="text-gray-900" href="">
                ALUMNO
              </a>
            </nav>

            <div className="items-center gap-4 lg:flex">
              <a
                href="#"
                className="rounded-lg bg-indigo-300 px-5 py-2 text-sm font-medium text-white"
              >
                Volver
              </a>
            </div>
          </div>

          <div className="  lg:hidden">
            <nav className="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium">
              <a className="flex-shrink-0 pl-4 text-gray-900" href="">
                ALUMNO
              </a>
            </nav>
          </div>
        </header>

        <div className="flex justify-between ">
          <div className="w-1/2">
            <img
              src="https://www.istockphoto.com/resources/images/FreePhotos/Free-Photo-700x860-1446445400.jpg"
              alt=""
            />
          </div>
          <div className="flex justify-center items-center w-1/2 ">
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
            >
              {() => (
                <Form className=" flex flex-col justify-center border h-5/6 w-8/12 shadow-sm shadow-gray-400 rounded-lg bg-gradient-to-b from-green-600 via-green-300 to-white">
                  {/*  <div className="">
                    <p className=" text-center">SCHOOL</p>
                  </div> */}
                  <div className="mb-10">
                    <h1 className=" text-center text-white text-3xl">
                      INICIAR SESIÓN
                    </h1>
                  </div>
                  <div className="flex flex-col items-center gap-5">
                    <div className="flex relative">
                      <Field
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        className="w-96 rounded-lg p-2 h-10"
                      />
                      <div className="absolute inset-0">
                        {/* <button disabled className="">
                          <img className="" src="" alt="" />
                        </button> */}
                        <IoMdMail />
                      </div>
                    </div>
                    <div className="">
                      <Field
                        id="password"
                        name="password"
                        placeholder="Contraseña"
                        className="w-96 rounded-lg p-2 h-10"
                      />
                      {/*       <div>
                        <button className=""></button>
                      </div> */}
                    </div>
                    <p
                      className="text-xl text-purple-700 underline
                       "
                    >
                      ¿Olvidaste tu contraseña?
                    </p>
                    <div className="">
                      <Field
                        className="bg-yellow-500 w-96 h-14 rounded-lg text-white text-2xl"
                        type="submit"
                        value="Ingresar"
                      />
                    </div>
                    <div className="w-96">
                      <p className="text-black text-center text-xs">
                        Al Iniciar Sesión, estas aceptando los{' '}
                        <span className="text-purple-700 underline">
                          Términos y condiciones
                        </span>{' '}
                        y nuestras políticas sobre{' '}
                        <span className="text-purple-700 underline">
                          Protección de Datos.
                        </span>
                      </p>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormLogin
