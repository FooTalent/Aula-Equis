import landig from '../../assets/landing.svg'
import Navbar from '../../components/NavBar/Navbar'
export const Landing = () => {
  return (
    <div className="h-screen">
      <div className="bg-gradient-to-br from-amber-500 via-orange-100 to-white min-h-full ">
        <Navbar />
        <div className=" items-center justify-center flex text-center mt-16 sm:px-40 ">
          <div className="">
            <h2 className="font-semibold sm:text-xl">
              Gestión digital de escuelas y entidades educativas
            </h2>
            <img src={landig} alt="" className="my-6 lg:hidden" />
            <p className="text-base  px-5 font-medium text-justify lg:leading-10 lg:font-normal">
              Descubre una nueva forma de organizar y administrar tareas dentro
              de tu institución con nuestra agenda digital
            </p>
            <p className="font-bold pb-4 text-[#5C407B] my-6">
              Pruébalo gratis por 30 días
            </p>
            <button className="bg-[#9688B5] rounded-2xl py-3 text-white  w-11/12 shadow-lg shadow-[#9688B5]-500/40">
              Probar Demo
            </button>
          </div>
          <img src={landig} alt="" className="hidden lg:inline lg:w-2/3" />
        </div>
      </div>
    </div>
  )
}
