import { Formik, Form, Field } from 'formik'
import { IoMdMail } from 'react-icons/Io'
import logo from '../../components/assets/logo.svg'
import imgLoginAlumno from '../../components/assets/imgLoginAlumno.svg'
import { Link } from 'react-router-dom'

const FormLogin = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-green-700 via-green-300 to-white min-h-screen">
        <header aria-label="Site Header">
          <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
            <div className="flex w-0 flex-1 mt-12 mr-44 ">
              <button className="rounded-full " type="button">
                <img className="lg:w-logoLoginLg h-24 " src={logo} alt="" />
              </button>
            </div>
            <nav className="hidden items-center justify-center gap-8 text-sm font-medium lg:flex lg:w-0 lg:flex-1 lg:mr-64">
              <p className="text-white text-6xl" href="">
                ALUMNO
              </p>
            </nav>

            <div className="items-center  flex text-center rounded-lg bg-indigo-300  text-xl text-white  lg:w-56 lg:h-12 ">
              <Link className="py-3 px-20">Volver</Link>
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

        <div className="flex justify-between  relative ">
          <div className="absolute flex  w-1/2">
            <img
              className=" w-56 h-48 md:w-imgLoginMd md:h-imgLoginMd  lg:w-imgLoginLg lg:h-imgLoginLg"
              src={imgLoginAlumno}
              alt=""
            />
          </div>
          <div className="flex justify-center items-center">
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
            >
              {() => (
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:mr-24">
                  <div className="mx-auto border-black   ">
                    {/* <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                      Get started today
                    </h1>

                    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Obcaecati sunt dolores deleniti inventore quaerat
                      mollitia?
                    </p> */}

                    <Form
                      action=""
                      className="absolute  right-24  mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 md:w-formLoginMd md:h-formLoginLg lg:p-8 lg:w-formLoginLg"
                    >
                      <p className="text-center text-white text-2xl font-bold">
                        INICIAR SESIÓN
                      </p>

                      <div>
                        {/* <label for="email" className="sr-only">
                          Email
                        </label> */}

                        <div className="flex relative justify-center">
                          <Field
                            type="email"
                            className="w-InputLg h-10 rounded-2xl border-2 border-gray-600 p-4 pr-12 text-sm shadow-sm"
                            placeholder="Correo electrónico"
                            value=""
                          />

                          <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                              />
                            </svg>
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

                          <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
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
                </div>
                // <Form className=" flex flex-col justify-center border h-5/6 w-8/12 shadow-sm shadow-gray-400 rounded-lg bg-gradient-to-b from-green-600 via-green-300 to-white">
                //   {/*  <div className="">
                //     <p className=" text-center">SCHOOL</p>
                //   </div> */}
                //   <div className="mb-10">
                //     <h1 className=" text-center text-white text-3xl">
                //       INICIAR SESIÓN
                //     </h1>
                //   </div>
                //   <div className="flex flex-col items-center gap-5">
                //     <div className="flex relative">
                //       <Field
                //         type="email"
                //         name="email"
                //         placeholder="Correo electrónico"
                //         className="w-96 rounded-lg p-2 h-10"
                //       />
                //       <div className="absolute inset-0">
                //         {/* <button disabled className="">
                //           <img className="" src="" alt="" />
                //         </button> */}
                //         <IoMdMail />
                //       </div>
                //     </div>
                //     <div className="">
                //       <Field
                //         id="password"
                //         name="password"
                //         placeholder="Contraseña"
                //         className="w-96 rounded-lg p-2 h-10"
                //       />
                //       {/*       <div>
                //         <button className=""></button>
                //       </div> */}
                //     </div>
                //     <p
                //       className="text-xl text-purple-700 underline
                //        "
                //     >
                //       ¿Olvidaste tu contraseña?
                //     </p>
                //     <div className="">
                //       <Field
                //         className="bg-yellow-500 w-96 h-14 rounded-lg text-white text-2xl"
                //         type="submit"
                //         value="Ingresar"
                //       />
                //     </div>
                //     <div className="w-96">
                //       <p className="text-black text-center text-xs">
                //         Al Iniciar Sesión, estas aceptando los{' '}
                //         <span className="text-purple-700 underline">
                //           Términos y condiciones
                //         </span>{' '}
                //         y nuestras políticas sobre{' '}
                //         <span className="text-purple-700 underline">
                //           Protección de Datos.
                //         </span>
                //       </p>
                //     </div>
                //   </div>
                // </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormLogin
