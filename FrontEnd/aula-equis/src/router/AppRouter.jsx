import { Route, Routes } from 'react-router-dom'
import { Landing } from '../aula-equis/pages/landing/Landing'
export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/lan" element={<Landing />} />
    </Routes>
  )
}
