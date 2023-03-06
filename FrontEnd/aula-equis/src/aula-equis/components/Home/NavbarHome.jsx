export const NavbarHome = () => {
  return (
    <nav className="flex justify-between items-center mx-5 sm:mx-20">
      <div>
        <img
          className=" w-12 sm:w-20 "
          src="https://tse4.mm.bing.net/th?id=OIP.zxWh6AJr3Hk3RcSFxtXFWAHaHa&pid=Api&P=0"
          alt=""
        />
      </div>
      <div className="flex gap-4 sm:gap-10 items-center">
        <p className=" cursor-pointer hidden sm:block">Preguntas frecuentas</p>
        <p className=" cursor-pointer">Ayuda</p>
        <button className=" bg-indigo-300 p-2 rounded">Contactanos</button>
      </div>
    </nav>
  )
}
