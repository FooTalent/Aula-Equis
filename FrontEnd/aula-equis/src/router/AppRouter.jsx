import { Route, Routes } from 'react-router-dom'
import FormRegister from '../aula-equis/components/FormRegister/FormRegister'
import { Home } from '../aula-equis/components/Home/Home'
import FormLogin from '../aula-equis/pages/formLogin/FormLogin'
import { Landing } from '../aula-equis/pages/landing/Landing'
import SendEmail from '../aula-equis/pages/sendemail/SendEmail'

export const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/login-alumno" element={<FormLogin />} />
      <Route exact path="/login-docente" element={<FormLogin />} />
      <Route exact path="/login-tutor" element={<FormLogin />} />
      <Route exact path="/login-escuela" element={<FormLogin />} />
      <Route exact path="/login-register" element={<FormRegister />} />
      <Route exact path="/login-send-email-alumno" element={<SendEmail />} />
      <Route exact path="/login-send-email-docente" element={<SendEmail />} />
      <Route exact path="/login-send-email-tutor" element={<SendEmail />} />
      <Route exact path="/login-send-email-escuela" element={<SendEmail />} />
      <Route exact path="/password-recovery-alumno" element={<SendEmail />} />
      <Route exact path="/password-recovery-docente" element={<SendEmail />} />
      <Route exact path="/password-recovery-tutor" element={<SendEmail />} />
      <Route exact path="/password-recovery-escuela" element={<SendEmail />} />
      <Route exact path="/form-register" element={<FormRegister />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/" element={<Landing />} />
    </Routes>
  )
}
