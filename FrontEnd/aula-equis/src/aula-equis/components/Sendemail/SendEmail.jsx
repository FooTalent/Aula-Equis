import { IoIosAlert, IoMdMail } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import { consultarPath } from '../../../helpers'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'

const SendEmail = ({ modal }) => {
  const userRol = consultarPath()
  console.log(userRol)

  const [formulario, setFormulario] = useState('flex')

  const ocultar = () => {
    setFormulario('hidden')
    modal()
  }

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('El correo electrónico es inválido')
        .required('El correo electrónico es requerido'),
    }),
    onSubmit: (values) => {
      console.log(values)

      axios
        .post(
          'https://aulaequis.onrender.com/api/auth/user/restaurarpass',
          values
        )
        .then((res) => {
          console.log(res.data)
          useNavigate(`/login-${userRol.rol}`)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  })

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSubmit()
    }
  }

  const { handleSubmit, handleChange, handleBlur, touched, errors } = formik
  return (
    <>
      <div
        className={` ${formulario} justify-center  items-center bg-opacity-50`}
      >
        <form
          onKeyDown={handleKeyDown}
          onSubmit={handleSubmit}
          className={`  sm:rounded-lg  xl:mr-4 p-8 md:shadow-lg md:w-formLoginMd md:h-formLoginMd xl:w-[610px] lg:p-12 bg-gradient-to-b ${userRol.bg}`}
        >
          <p className="hidden md:flex md:justify-center text-center text-sm text-white lg:text-2xl font-bold ">
            RESTABLECER CONTRASEÑA
          </p>
          <p className="hidden md:flex md:justify-center text-center text-xs text-white lg:text-lg font-bold ">
            Ingresa tu correo electrónico y te enviaremos un mail para
            restablecer tu contraseña
          </p>
          <div className="grid grid-cols-1 gap-7 ">
            <div className="">
              <div className="">
                <label className="text-[#FBFBFB] mb-2" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  className="h-16 rounded-2xl border-2 border-gray-600  pr-12 shadow-sm w-full p-3 text-sm"
                  placeholder="Correo electrónico"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="grid justify-end -mt-9 mr-3">
                <IoMdMail className="h-4 text-purple-700" />
              </div>
              {touched.email && errors.email && (
                <div className="flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm">
                  {errors.email}
                  <IoIosAlert />
                </div>
              )}
            </div>
          </div>
          <div className="mt-2">
            <input
              type="submit"
              className="h-14 rounded-2xl  bg-yellow-500 text-sm cursor-pointer inline-block w-full mt-6  px-5 py-3 font-medium text-white lg:text-2xl"
              value="Restablecer"
            />
          </div>
          <div className="relative flex justify-center mt-2">
            <p className="text-xs font-normal text-center lg:text-xl" href="">
              <Link onClick={ocultar} className="underline text-purple-700">
                Cancelar
              </Link>
            </p>
          </div>
          <div className="flex justify-center mt-1">
            <p className="flex flex-col md:block text-xs font-normal text-center">
              Al Iniciar Sesión, estas aceptando los{' '}
              <Link className="underline text-purple-700">
                Términos y condiciones
              </Link>{' '}
              y nuestras políticas sobre{' '}
              <Link className="underline text-purple-700">
                Protección de Datos.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  )
}

export default SendEmail
