import { Route, Routes } from 'react-router-dom'
import FormLogin from '../aula-equis/pages/formLogin/FormLogin'
import { Landing } from '../aula-equis/pages/landing/Landing'
export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/lan" element={<Landing />} />
      <Route path="/login" element={<FormLogin />} />
    </Routes>
  )
}
