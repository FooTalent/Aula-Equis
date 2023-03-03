import { Formik, Form, Field, ErrorMessage } from 'formik'

function CuentaForm () {
  return (
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
      validate={(values) => {
        const errors = {}
        if (values.email1 !== values.email2) {
          errors.email2 = 'Los correos electrónicos no coinciden'
        }
        if (values.password1 !== values.password2) {
          errors.password2 = 'Las contraseñas no coinciden'
        }
        return errors
      }}
      onSubmit={(values) => {
        // Manejar envío del formulario
      }}
    >
      {({ isSubmitting }) => (
        <Form className='flex flex-col items-center w-80 m-auto rounded-lg mt-9 bg-yellow-400 shadow'>
          <div className='w-3/4 mt-3'>
            <h2 className='text-lg font-bold mb-1'>Cuenta</h2>
            <div className="flex flex-col">
              <label htmlFor="email1" className='text-xs font-bold mt-1'>Email</label>
              <Field type="email" id="email1" name="email1" placeholder="JC.Director@correo.com" className="w-100 pl-1 rounded-md text-xs py-1.5"/>
            </div>
            <div className="flex flex-col">
              <label htmlFor="email2" className='text-xs font-bold mt-1'>Email</label>
              <Field type="email" id="email2" name="email2" placeholder="Repita el correo" className="w-100 pl-1 rounded-md text-xs py-1.5"/>
              <ErrorMessage name="email2" component="div" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password1" className='text-xs font-bold mt-1'>Contraseña</label>
              <Field type="password" id="password1" name="password1" placeholder="Min 8 caracteres" className="w-100 pl-1 rounded-md text-xs py-1.5"/>
            </div>
            <div className="flex flex-col">
              <label htmlFor="password2" className='text-xs font-bold mt-1'>Contraseña</label>
              <Field type="password" id="password2" name="password2" placeholder="Repita la contraseña" className="w-100 pl-1 rounded-md text-xs py-1.5"/>
              <ErrorMessage name="password2" component="div" />
            </div>
          </div>

          <div className="w-3/4 mt-3">
            <h2 className='text-lg font-bold mb-1'>Contacto</h2>
            <div className="flex flex-col">
              <label htmlFor="nombre" className='text-xs font-bold mt-1'>Nombre</label>
              <Field type="text" id="nombre" name="nombre" placeholder="Juan Carlos" className="w-100 pl-1 rounded-md text-xs py-1.5"/>
            </div>
            <div className="flex flex-col">
              <label htmlFor="apellido" className='text-xs font-bold mt-1'>Apellido</label>
              <Field type="text" id="apellido" name="apellido" placeholder="Perez"className="w-100 pl-1 rounded-md text-xs py-1.5"/>
            </div>
            <div className="flex flex-col">
              <label htmlFor="numeroTel" className='text-xs font-bold mt-1'>Teléfono</label>
              <div>
                <Field type="text" id="numeroTel" name="numeroTel" placeholder="+54" className="w-8 pl-1 rounded-md text-xs py-1.5 px-1"/> -
                <Field type="text" id="numeroTel" name="numeroTel" placeholder="011 2545 545" className="pr-3 pl-1 py-1.5 w-32 ml-2 text-xs rounded-md "/>
              </div>
            </div>
          </div>

          <div className='w-3/4 mt-3'>
            <h2 className='text-lg font-bold mb-1'>Institución</h2>
            <div className='flex flex-col'>
              <label htmlFor="colegio" className='text-xs font-bold mx-2 mt-1'>Colegio</label>
              <Field type="text" id="colegio" name="colegio" placeholder="Colegio" className="w-60 pl-1 rounded-md text-xs py-1.5 "/>
            </div>
            <div className="flex flex-col">
              <label htmlFor="direccion" className='text-xs font-bold mx-2 mt-1'>Dirección</label>
              <Field type="text" id="direccion" name="direccion" placeholder="Direccion" className="w-60 px-1 rounded-md text-xs py-1.5"/>
            </div>
            <div className="flex flex-col">
              <label htmlFor="ciudad" className='text-xs font-bold mx-2 mt-1'>Ciudad</label>
              <Field type="text" id="ciudad" name="ciudad" placeholder="Ciudad" className="w-60 px-1 rounded-md text-xs py-1.5"/>
            </div>
          </div>
          <div className="mt-3">
              <button type="submit" disabled={isSubmitting} className="bg-purple-800 text-gray-100 text-sm py-1 my-4 font-bold 40px w-60 rounded-2xl ">
                Registrarse
              </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default CuentaForm
