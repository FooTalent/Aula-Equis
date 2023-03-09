import { Link } from 'react-router-dom'
import { NavbarHome } from './NavbarHome'
import { arrayCards } from '../../../helpers/arrayCards'
export const Home = () => {
  return (
    <div>
      <NavbarHome />

      {arrayCards.map((card, index) => (
        <div key={index} className="flex">
          <div
            className={`${card.color} rounded-lg hover:scale-150 transition-all w-1/2`}
          >
            <img src={`${card.img}`} alt={`${card.name} `} />
            <p>{card.name}</p>
            <div className="bg-white w-full rounded-sm">
              <Link className={`${card.textColor} `}>{card.text}</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
