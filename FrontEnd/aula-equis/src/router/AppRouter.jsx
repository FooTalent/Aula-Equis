import { Route, Routes } from 'react-router-dom'
import FormRegister from '../aula-equis/components/FormRegister/FormRegister'
import { Home } from '../aula-equis/components/Home/Home'
import FormLogin from '../aula-equis/pages/formLogin/FormLogin'
import { Landing } from '../aula-equis/pages/landing/Landing'
import SendEmail from '../aula-equis/pages/sendemail/SendEmail'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/lan" element={<Landing />} />
      <Route path="/login-alumno" element={<FormLogin />} />
      <Route path="/login-docente" element={<FormLogin />} />
      <Route path="/login-tutor" element={<FormLogin />} />
      <Route path="/login-escuela" element={<FormLogin />} />
      <Route path="/login-register" element={<FormRegister />} />
      <Route path="/login-send-email-alumno" element={<SendEmail />} />
      <Route path="/login-send-email-docente" element={<SendEmail />} />
      <Route path="/login-send-email-tutor" element={<SendEmail />} />
      <Route path="/login-send-email-escuela" element={<SendEmail />} />
      <Route path="/form-register" element={<FormRegister />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}
