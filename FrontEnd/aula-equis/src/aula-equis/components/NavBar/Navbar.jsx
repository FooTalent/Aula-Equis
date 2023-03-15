import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
const Navbar = () => {
  return (
    <>
      <header aria-label="Site Header " className="pt-10">
        <div className="flex items-center justify-between xl:justify-items-stretch px-4 md:pl-14 lg:pl-16">
          <Link to="/">
            <img src={logo} className="w-24 md:w-44 xl:w-48" alt="" />
          </Link>
          <div className="flex items-center">
            <nav
              aria-label="Site Nav"
              className="hidden xl:flex uppercase xl:justify-evenly xl:gap-16 xl:font-semibold xl:mr-20"
            >

              <Link to="/home">Home</Link>

              <Link>Nosotros</Link>
              <Link>Contactanos</Link>
            </nav>
            <Link
              to="/home"
              className="xl:w-48 lg:w-36 rounded-lg bg-[#E59D1C] text-white md:mr-11 text-center cursor-pointer text-sm px-6 py-2 "
            >
              Iniciar sesión
            </Link>
          </div>
        </div>
        <nav className="border-gray-100 xl:hidden flex text-[#114A7C] uppercase justify-evenly font-semibold pl-6 pt-6 md:pl-14 md:text-left md:justify-start md:gap-10 lg:pl-28 text-sm">
          <Link>Home</Link>
          <Link>Nosotros</Link>
          <Link>Contactanos</Link>
        </nav>
      </header>
    </>
  )
}

export default Navbar
