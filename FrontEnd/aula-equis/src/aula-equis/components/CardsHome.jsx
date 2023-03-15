/* eslint-disable multiline-ternary */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BiLogIn } from 'react-icons/bi'
export const CardsHome = ({ card }) => {
  const { path, img, name, color, id, textColor, clas, shadows } = card
  const [showLink, setShowLink] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [windowWidth])
  return windowWidth <= 1200 ? (
    <Link
      to={path}
      className={`${color} ${clas} flex items-center mb-5 md:mb-0 gap-5 md:gap-11 py-3 pl-6 md:pl-0 md:grid md:py-9 `}
    >
      <img
        src={img}
        alt={name}
        className="w-[136px] h-[118px] md:w-[177px] md:h-[156px]"
      />
      <p className="w-[129px]">{name}</p>
    </Link>
  ) : (
    <div
      key={id}
      onMouseEnter={() => setShowLink(id)}
      onMouseLeave={() => setShowLink(null)}
      className={`${color} ${clas} grid shadow-2xl shadow-gray-800/100 `}
    >
      <div className="pt-20 pb-[89px] px-9 2xl:px-0 2xl:pt-32 2xl:pb-36">
        <img
          src={img}
          alt={name}
          className="w-[177px] h-[156px] mb-11 2xl:w-[178px] 2xl:h-[164px] "
        />
        <p>{name}</p>
      </div>
      {showLink === id && (
        <Link to={path} className={`${textColor}`}>
          <BiLogIn />
          Ingresar
        </Link>
      )}
    </div>
  )
}

//
