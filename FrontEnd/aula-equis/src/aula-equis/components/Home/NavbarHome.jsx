import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
export const NavbarHome = () => {
  return (
    <nav className="flex justify-between items-center mx-5 my-7 sm:mx-20">
      <div>
        <Link to="/">
          <img src={logo} className="w-24 md:w-44 xl:w-48" alt="" />
        </Link>
      </div>
      <div className="flex gap-4 sm:gap-10 items-center">
        <p className=" cursor-pointer hidden md:flex">Preguntas frecuentas</p>
        <p className=" cursor-pointer">Ayuda</p>
        <button className=" bg-[#9688B5] text-white p-3 rounded-xl">
          Contactanos
        </button>
      </div>
    </nav>
  )
}
