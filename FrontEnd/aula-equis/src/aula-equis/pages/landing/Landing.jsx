import landig from '../../assets/landing.svg'
export const Landing = () => {
  return (
    <div className="bg-gradient-to-br from-amber-500 via-orange-100 to-white h-screen ">
      <div className="flex "></div>
      <div className="lg:flex items-center  justify-center md:grid text-center  sm:px-36 ">
        <div className="lg:ml-32 lg:text-left">
          <h2 className="text-2xl font-semibold pb-10 sm:text-4xl   lg:text-5xl lg:pb-5">
            Gestión digital de escuelas y entidades educativas
          </h2>
          <img
            src={landig}
            alt=""
            className="pb-12 px-6 lg:hidden sm:px-32  lg:px-0"
          />
          <p className="text-base pb-5 font-medium px-9 text-justify lg:p-0 sm:text-xl lg:text-3xl lg:w-9/12 lg:leading-10 sm:pb-14 lg:font-normal">
            Descubre una nueva forma de organizar y administrar tareas dentro de
            tu institución con nuestra agenda digital
          </p>
          <p className="text-2xl font-bold pb-4 text-[#5C407B] sm:text-3xl sm:pb-12 ">
            Pruébalo gratis por 30 días
          </p>
          <button className="bg-[#9688B5] rounded-3xl py-3 text-white text-xl w-11/12 sm:w-1/2 sm:rounded-2xl ">
            Probar Demo
          </button>
        </div>
        <img src={landig} alt="" className="hidden lg:inline lg:mr-20" />
      </div>
    </div>
  )
}
