import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
const Navbar = () => {
  const activeStyle = {
    color: '#114A7C',
    textDecoration: 'none',
    borderBottom: '3px solid #E59D1C',
  }
  const styleDefaultText = {
    textDecoration: 'none',
    border: 'none',
  }
  return (
    <>
      <header>
        <div className="mx-auto flex h-16 max-w-screen-xxl items-center justify-between px-4">
          <div className=" w-16 h-6 md:w-40 md:h-14">
            <Link className="rounded-full" type="button">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <nav className="hidden items-center justify-end gap-8 mr-10 text-sm font-medium lg:flex lg:w-0 lg:flex-1">
            <NavLink
              to={'/home'}
              style={({ isActive }) =>
                isActive ? activeStyle : styleDefaultText
              }
              className="text-blue-800 text-lg"
            >
              Home
            </NavLink>
            <NavLink
              to={'/nosotros'}
              style={({ isActive }) =>
                isActive ? activeStyle : styleDefaultText
              }
              className="text-blue-800 text-lg"
            >
              Nosotros
            </NavLink>
            <NavLink
              to={'/contactanos'}
              style={({ isActive }) =>
                isActive ? activeStyle : styleDefaultText
              }
              className="text-blue-800 text-lg"
            >
              Contactanos
            </NavLink>
          </nav>

          <div className=" items-center mr-5 gap-4 flex text-lg">
            <NavLink
              to={'/login'}
              className="rounded-lg w-32 bg-orange-400 px-5 py-2 text-xs md:text-lg text-center font-medium text-white md:w-48"
            >
              Iniciar sesión
            </NavLink>
          </div>
        </div>
        <div className=" border-gray-100 lg:hidden">
          <nav className="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium">
            <NavLink
              to={'/home'}
              style={({ isActive }) =>
                isActive ? activeStyle : styleDefaultText
              }
              className="flex-shrink-0 pl-4 text-blue-800 text-xs md:text-lg"
            >
              Home
            </NavLink>
            <NavLink
              to={'/nosotros'}
              style={({ isActive }) =>
                isActive ? activeStyle : styleDefaultText
              }
              className="flex-shrink-0 pl-4 text-blue-800 text-xs md:text-lg"
            >
              Nosotros
            </NavLink>
            <NavLink
              to={'/contactanos'}
              style={({ isActive }) =>
                isActive ? activeStyle : styleDefaultText
              }
              className="flex-shrink-0 pl-4 text-blue-800 text-xs md:text-lg"
            >
              Contactanos
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
