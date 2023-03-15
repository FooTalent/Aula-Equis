import { Formik, Form, Field, ErrorMessage } from 'formik'
import Navbar from '../NavBar/Navbar'
import * as Yup from 'yup'
import imgFormRegister from '../assets/imgFormRegister.svg'

function CuentaForm () {
  const validationRegister = Yup.object({
    email1: Yup.string()
      .email(<p className="text-red-600">Formato de email invalido</p>)
      .required(<p className="text-red-600">Campo requerido</p>),
    email2: Yup.string()
      .email(<p className="text-red-600">Formato de email invalido</p>)
      .required(<p className="text-red-600">Campo requerido</p>),
    password1: Yup.string().required(
    ),
    password2: Yup.string().required(
    ),
    colegio: Yup.string().required(
    ),
    direccion: Yup.string().required(
    ),
    ciudad: Yup.string().required(
    )
  })

  return (
    <div className='bg-gradient-to-r from-[#FFC562] to-[#FFFFFF]'>
        <Navbar />
      <div className='flex mt-12 justify-around'>
        <div className='flex flex-col w-1/2 ml-8 mb-24'>
          <img
          src={ imgFormRegister}
          alt="imagen formulario de registro"
          className='xl:inline xl:w-1/2 2xl:w-8/12 my-12'
          />
          <p className="font-bold pb-4 text-[#5C407B] my-6 lg:text-3xl text-center xl:text-left sm:text-3xl">
              Pruébalo gratis por 30 días
            </p>
          <p className="text-base lg:text-2xl  xl:px-0 font-medium text-left lg:leading-10 lg:font-semibold sm:text-3xl">
              Descubre una nueva forma de organizar y administrar tareas dentro
              de tu institución con nuestra agenda digital
            </p>
        </div>
      <div className='mb-8'>
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
          validationSchema = {validationRegister}
          onSubmit={(values) => {
            // Manejar envío del formulario
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col items-center w-96 ml-16 rounded-lg bg-[#FFC562] shadow">
              <div className="w-3/4 mt-3">
                <h2 className="text-lg font-bold mb-1">Cuenta</h2>
                <div className="flex flex-col">
                  <label htmlFor="email1" className="flex text-xs font-bold mt-1">
                    Email*
                    <ErrorMessage name='email1' className='ml-3'/>
                  </label>
                  <Field
                    type="email"
                    id="email1"
                    name="email1"
                    placeholder="JC.Director@correo.com"
                    className="w-100 pl-1 rounded-md text-xs py-1.5"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email2" className="flex text-xs font-bold mt-1">
                    Email*
                    <ErrorMessage name="email2" component="div" className='ml-3'/>
                  </label>
                  <Field
                    type="email"
                    id="email2"
                    name="email2"
                    placeholder="Repita el correo"
                    className="w-100 pl-1 rounded-md text-xs py-1.5"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="password1" className="text-xs font-bold mt-1">
                    Contraseña*
                  </label>
                  <Field
                    type="password"
                    id="password1"
                    name="password1"
                    placeholder="Min 8 caracteres"
                    className="w-100 pl-1 rounded-md text-xs py-1.5"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="password2" className="text-xs font-bold mt-1">
                    Contraseña*
                  </label>
                  <Field
                    type="password"
                    id="password2"
                    name="password2"
                    placeholder="Repita la contraseña"
                    className="w-100 pl-1 rounded-md text-xs py-1.5"
                  />
                  <ErrorMessage name="password2" component="div" />
                </div>
              </div>

              <div className="w-3/4 mt-3">
                <h2 className="text-lg font-bold mb-1">Contacto</h2>
                <div className="flex flex-col">
                  <label htmlFor="nombre" className="text-xs font-bold mt-1">
                    Nombre*
                  </label>
                  <Field
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Juan Carlos"
                    className="w-100 pl-1 rounded-md text-xs py-1.5"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="apellido" className="text-xs font-bold mt-1">
                    Apellido*
                  </label>
                  <Field
                    type="text"
                    id="apellido"
                    name="apellido"
                    placeholder="Perez"
                    className="w-100 pl-1 rounded-md text-xs py-1.5"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="numeroTel" className="text-xs font-bold mt-1">
                    Teléfono*
                  </label>
                  <div>
                    <Field
                      type="text"
                      id="numeroTel"
                      name="numeroTel"
                      placeholder="+54"
                      className="w-8 pl-1 rounded-md text-xs py-1.5 px-1"
                    />{' '}
                    -
                    <Field
                      type="text"
                      id="numeroTel"
                      name="numeroTel"
                      placeholder="011 2545 545"
                      className="pr-3 pl-1 py-1.5 w-24 ml-2 text-xs rounded-md "
                    />
                  </div>
                </div>
              </div>

              <div className="w-3/4 mt-3">
                <h2 className="text-lg font-bold mb-1">Institución</h2>
                <div className="flex flex-col">
                  <label
                    htmlFor="colegio"
                    className="text-xs font-bold mx-2 mt-1"
                  >
                    Colegio*
                  </label>
                  <Field
                    type="text"
                    id="colegio"
                    name="colegio"
                    placeholder="Colegio"
                    className="w-60 pl-1 rounded-md text-xs py-1.5 "
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
                    className="w-60 px-1 rounded-md text-xs py-1.5"
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
                    className="w-60 px-1 rounded-md text-xs py-1.5"
                  />
                </div>
              </div>
              <div className="mt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-purple-800 text-gray-100 text-sm py-1 my-4 font-bold 40px w-60 rounded-2xl "
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
