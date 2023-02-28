import { Formik, Form, Field, ErrorMessage } from 'formik';

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
      validate={values => {
        const errors = {};
        if (values.email1 !== values.email2) {
          errors.email2 = 'Los correos electrónicos no coinciden';
        }
        if (values.password1 !== values.password2) {
          errors.password2 = 'Las contraseñas no coinciden';
        }
        return errors;
      }}
      onSubmit={values => {
        // Manejar envío del formulario
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <h2>Cuenta</h2>
          <div>
            <label htmlFor="email1">Correo electrónico:</label>
            <Field type="email" id="email1" name="email1" />
          </div>
          <div>
            <label htmlFor="email2">Repetir correo electrónico:</label>
            <Field type="email" id="email2" name="email2" />
            <ErrorMessage name="email2" component="div" />
          </div>
          <div>
            <label htmlFor="password1">Contraseña:</label>
            <Field type="password" id="password1" name="password1" />
          </div>
          <div>
            <label htmlFor="password2">Repetir contraseña:</label>
            <Field type="password" id="password2" name="password2" />
            <ErrorMessage name="password2" component="div" />
          </div>

          <h2>Contacto</h2>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <Field type="text" id="nombre" name="nombre" />
          </div>
          <div>
            <label htmlFor="apellido">Apellido:</label>
            <Field type="text" id="apellido" name="apellido" />
          </div>
          <div>
            <label htmlFor="codigoPais">Código de país del celular:</label>
            <Field type="text" id="codigoPais" name="codigoPais" />
          </div>
          <div>
            <label htmlFor="numeroCelular">Número de celular:</label>
            <Field type="text" id="numeroCelular" name="numeroCelular" />
          </div>

          <h2>Institución</h2>
          <div>
            <label htmlFor="colegio">Colegio:</label>
            <Field type="text" id="colegio" name="colegio" />
          </div>
          <div>
            <label htmlFor="direccion">Dirección:</label>
            <Field type="text" id="direccion" name="direccion" />
          </div>
          <div>
            <label htmlFor="ciudad">Ciudad:</label>
            <Field type="text" id="ciudad" name="ciudad" />
          </div>
          <div>
            <button type="submit" disabled={isSubmitting}>
              Registrarse
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
export default CuentaForm;

