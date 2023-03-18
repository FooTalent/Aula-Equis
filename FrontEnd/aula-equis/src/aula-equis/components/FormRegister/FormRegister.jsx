import { Formik, Form, Field, ErrorMessage } from 'formik'
import Navbar from '../NavBar/Navbar'
import * as Yup from 'yup'
import imgFormRegister from '../assets/imgFormRegister.svg'

function CuentaForm () {
  const validationRegister = Yup.object({
    email1: Yup.string()
      .email(<p className="text-red-600 text-xs">Formato de email invalido</p>)
      .required(<p className="text-red-600 text-xs">Campo requerido</p>),
    email2: Yup.string()
      .email(<p className="text-red-600 text-xs">Formato de email invalido</p>)
      .required(<p className="text-red-600 text-xs">Campo requerido</p>),
    password1: Yup.string().required(
    <p className="text-red-600 text-xs">Campo requerido</p>).min(8, 'ingresa 8 caracteres como mínimo'),
    password2: Yup.string().oneOf([Yup.ref('password1'), null], 'Las contraseñas deben coincidir').required(
    <p className="text-red-600 text-xs">Campo requerido</p>),
    colegio: Yup.string().required(<p className="text-red-600">Campo requerido</p>),
    direccion: Yup.string().required(<p className="text-red-600">Campo requerido</p>
    ),
    ciudad: Yup.string().required(<p className="text-red-600">Campo requerido</p>
    )
  })

  return (
    <div className="bg-gradient-to-r max-h-full from-[#FFC562] to-[#FFFFFF]">
      <Navbar />
      <div className="flex h-screen sm:flex-col sm:w-screen md:flex-col md:items-center lg:flex-row">
        <div className="hidden md:block md:mt-10 md:w-2/3 lg:block lg:mx-10 lg:mt-2 2xl:w-1/2 2xl:mr-52">
          <img
            src={imgFormRegister}
            alt="imagen formulario de registro"
            className="hidden lg:block xl:inline xl:ml-14"
          />
          <p className="font-bold pb-4 text-[#114a7c] my-6 lg:text-3xl text-center md:block md:text-4xl xl:text-5xl">
            Pruébalo gratis por 30 días
          </p>
          <p className="text-[#114a7c] text-start ml-10 mb-10 text-base lg:text-2xl font-medium lg:leading-10 lg:font-semibold md:block md:text-2xl xl:ml-14 2xl:w-1/2">
            Descubre una nueva forma de organizar y administrar tareas dentro de
            tu institución con nuestra agenda digital
          </p>
        </div>
        <div className="mb-8 flex justify-center">
          <Formik
            initialValues={{
              email1: '',
              email2: '',
              password1: '',
              password2: '',
              colegio: '',
              direccion: '',
              ciudad: ''
            }}
            // validate={(values) => {
            //   const errors = {}
            //   if (values.email1 !== values.email2) {
            //     errors.email2 = 'Los correos electrónicos no coinciden'
            //   }
            //   if (values.password1 !== values.password2) {
            //     errors.password2 = 'Las contraseñas no coinciden'
            //   }
            //   return errors
            // }}
            validationSchema={validationRegister}
            onSubmit={(values) => {
              // Manejar envío del formulario
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col mt-20 items-center h-min w-60 rounded-lg bg-[#FFC562] shadow-lg shadow-black sm:w-96 md:mt-6 lg:mr-10 2xl:mr-5">
                <div className="w-3/4 mt-3">
                  <h2 className="text-lg font-bold mb-1">Cuenta</h2>
                  <div className="flex flex-col">
                    <label
                      htmlFor="email1"
                      className="flex text-xs font-bold mt-1"
                    >
                      Email*
                    </label>
                    <Field
                      type="email"
                      id="email1"
                      name="email1"
                      placeholder="JC.Director@correo.com"
                      className="w-100 pl-1 rounded-md text-xs py-1.5"
                    />
                    <ErrorMessage
                      name="email1"
                      className="text-xs text-red-600 "
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="email2"
                      className="flex text-xs font-bold mt-1"
                    >
                      Confirma Email*
                    </label>
                    <Field
                      type="email"
                      id="email2"
                      name="email2"
                      placeholder="Repita el correo"
                      className="w-100 pl-1 rounded-md text-xs py-1.5"
                    />
                    <ErrorMessage
                      name="email2"
                      component="div"
                      className="text-red-600 text-xs"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="password1"
                      className="text-xs font-bold mt-1"
                    >
                      Contraseña*
                    </label>
                    <Field
                      type="password"
                      id="password1"
                      name="password1"
                      placeholder="Min 8 caracteres"
                      className="w-100 pl-1 rounded-md text-xs py-1.5"
                    />
                    <ErrorMessage
                      name="password1"
                      component="div"
                      className="text-xs text-red-600"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="password2"
                      className="text-xs font-bold mt-1"
                    >
                      Verificar Contraseña*
                    </label>
                    <Field
                      type="password"
                      id="password2"
                      name="password2"
                      placeholder="Repita la contraseña"
                      className="w-100 pl-1 rounded-md text-xs py-1.5"
                    />
                    <ErrorMessage
                      name="password2"
                      component="div"
                      className="text-xs text-red-600"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <h2 className="text-lg font-bold mb-1">Contacto</h2>
                  <div className="flex flex-col">
                    <label htmlFor="nombre" className="text-xs font-bold mt-1 sm:w-72">
                      Nombre*
                    </label>
                    <Field
                      type="text"
                      id="nombre"
                      name="nombre"
                      placeholder="Juan Carlos"
                      className="pl-1 rounded-md text-xs py-1.5"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="apellido"
                      className="text-xs font-bold mt-1"
                    >
                      Apellido*
                    </label>
                    <Field
                      type="text"
                      id="apellido"
                      name="apellido"
                      placeholder="Perez"
                      className="pl-1 rounded-md text-xs py-1.5"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="numeroTel"
                      className="text-xs font-bold mt-1"
                    >
                      Teléfono*
                    </label>
                    <div>
                      <Field
                        type="text"
                        id="numeroTel"
                        name="numeroTel"
                        placeholder="+54"
                        className="pl-1 w-8 rounded-md text-xs py-1.5 px-1"
                      />{' '}
                      -
                      <Field
                        type="text"
                        id="numeroTel"
                        name="numeroTel"
                        placeholder="011 2545 545"
                        className="pr-3 w-28 pl-1 py-1.5 ml-2 text-xs rounded-md "
                      />
                    </div>
                  </div>
                </div>

                <div className="w-3/4 mt-3">
                  <h2 className="text-lg font-bold mb-1">Institución</h2>
                  <div className="flex flex-col">
                    <label
                      htmlFor="colegio"
                      className="text-xs font-bold mt-1"
                    >
                      Colegio*
                    </label>
                    <Field
                      type="text"
                      id="colegio"
                      name="colegio"
                      placeholder="Colegio"
                      className=" pl-1 rounded-md text-xs py-1.5 "
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="direccion"
                      className="text-xs font-bold mx-2 mt-1"
                    >
                      Dirección*
                    </label>
                    <Field
                      type="text"
                      id="direccion"
                      name="direccion"
                      placeholder="Direccion"
                      className=" px-1 rounded-md text-xs py-1.5"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="ciudad"
                      className="text-xs font-bold mx-2 mt-1"
                    >
                      Ciudad*
                    </label>
                    <Field
                      type="text"
                      id="ciudad"
                      name="ciudad"
                      placeholder="Ciudad"
                      className=" px-1 rounded-md text-xs py-1.5"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-purple-800 text-gray-100 text-sm py-1 my-4 w-32 font-bold 40px rounded-2xl "
                  >
                    Registrarse
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default CuentaForm
