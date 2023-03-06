import landig from '../../assets/landing.svg'
import Navbar from '../../components/NavBar/Navbar'
export const Landing = () => {
  return (
    <div className="h-screen">
      <div className="bg-gradient-to-br from-amber-500 via-orange-100 to-white min-h-full ">
        <Navbar />
        <div className=" items-center lg:mx-56 md:mx-24 xl:mx-20 2xl:mx-24 justify-center flex text-left sm:text-center mt-16 px-6 md:px-0  xl:text-left xl:mt-48 xl:gap-9 2xl:gap-4">
          <div className="2xl:py-20 2xl:pr-12">
            <h2 className="font-semibold sm:text-left  xl:mb-5 sm:text-4xl xl:text-5xl">
              Gestión digital de escuelas y entidades educativas
            </h2>
            <img src={landig} alt="" className="my-6 xl:hidden" />
            <p className="text-base lg:text-2xl  xl:px-0 font-medium text-left lg:leading-10 lg:font-semibold sm:text-3xl">
              Descubre una nueva forma de organizar y administrar tareas dentro
              de tu institución con nuestra agenda digital
            </p>
            <p className="font-bold pb-4 text-[#5C407B] my-6 lg:text-3xl text-center xl:text-left sm:text-3xl">
              Pruébalo gratis por 30 días
            </p>

            <button className="bg-[#9688B5] rounded-2xl py-3 lg:text-2xl text-white center w-full sm:w-7/12 xl:w-10/12 shadow-lg shadow-[#9688B5]-500/40 ">
              Probar Demo
            </button>
          </div>
          <img src={landig} alt="" className="hidden xl:inline xl:w-1/2 2xl:w-10/12" />
        </div>
      </div>
    </div>
  )
}
