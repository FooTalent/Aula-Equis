import { Route, Routes } from 'react-router-dom'
import { Home, Landing } from '../pages'
import FormLogin from '../pages/FormLogin'
export const AulaRouter = () => {
  return (
    <Routes>
      <Route path="/lan" element={<Landing />} />
      <Route path="/login-alumno" element={<FormLogin />} />
      <Route path="/login-docente" element={<FormLogin />} />
      <Route path="/login-tutor" element={<FormLogin />} />
      <Route path="/login-escuela" element={<FormLogin />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}
