import { NavbarHome } from '../components/Home/NavbarHome'
import { arrayCards } from '../../helpers/arrayCards'
import { CardsHome } from '../components'
export const Home = () => {
  return (
    <div className="h-screen">
      <div className="bg-gradient-to-br from-amber-500 via-orange-100 to-white min-h-full grid">
        <NavbarHome />

        <div className="">
          <p className="text-center mb-7 md:mb-12  text-xl md:text-4xl font-semibold text-[#26036E] ">
            ¡Te damos la bienvenida!
          </p>
          <div className="md:grid md:grid-cols-2 md:gap-10 mx-4 sm:mx-24 lg:mx-40 xl:grid-cols-4 xl:mx-24 xl:gap-4 ">
            {arrayCards.map((card) => (
              <CardsHome key={card.id} card={card} />
            ))}
          </div>

          <p className="hidden md:flex md:mt-28 xl:mt-36 md:mx-14 lg:mx-44  md:text-justify md:text-xs xl:text-xl xl:text-center xl:font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  )
}
