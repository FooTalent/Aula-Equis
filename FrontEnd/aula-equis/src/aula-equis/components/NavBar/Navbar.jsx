import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
const Navbar = () => {
  return (
    <>
      <header aria-label="Site Header">
        <div className="mx-auto flex h-16 max-w-screen-xxl items-center justify-between px-4">
          <div className="flex w-0 flex-1 ">
            <Link className="rounded-full p-2 text-gray-600" type="button">
              <span className="sr-only">Account</span>
              <img src={logo} height="50px" width="50px" alt="" />
            </Link>
          </div>
          <nav
            aria-label="Site Nav"
            className="hidden items-center justify-end gap-8 mr-10 text-sm font-medium lg:flex lg:w-0 lg:flex-1"
          >
            <Link className="text-blue-800 text-lg">Home</Link>
            <Link className="text-blue-800 text-lg">Nosotros</Link>
            <Link className="text-blue-800 text-lg">Contactanos</Link>
          </nav>

          <div className=" items-center mr-5 gap-4 flex text-lg">
            <Link className="rounded-lg w-32 bg-orange-400 px-5 py-2 text-xs md:text-lg text-center font-medium text-white md:w-48">
              Iniciar sesión
            </Link>
          </div>
        </div>
        <div className=" border-gray-100 lg:hidden">
          <nav className="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium">
            <Link className="flex-shrink-0 pl-4 text-blue-800 text-xs md:text-lg">
              Home
            </Link>
            <Link className="flex-shrink-0 pl-4 text-blue-800 text-xs md:text-lg">
              Nosotros
            </Link>
            <Link className="flex-shrink-0 pl-4 text-blue-800 text-xs md:text-lg">
              Contactanos
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
