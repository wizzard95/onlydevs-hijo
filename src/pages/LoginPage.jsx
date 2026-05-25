import { Icon } from '@iconify/react'
import logo from '../assets/react.svg'
import { useState } from 'react'
export const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false)
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="flex h-screen w-full">
            {/* lado izquierdo -baner azul */}
            <section
                className="hidden md:flex md:w-1/2 bg-[#1d93ba] flex flex-col
            justify-center items-center overflow-hidden"
            >
                <div className="px-8 text-white text-center flex flex-col gap-4">
                    <div className="flex items-center gap-3 justify-center">
                        <img src={logo} className="h-10 w-10" />
                        <span className="text-4xl font-bold text-[#CCEFFC]">
                            My<span className="text-[#ffffff]">SocialNet</span>
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-semibold">
                            Registrate para apoyar
                        </span>

                        <span className="text-3xl font-semibold">
                            {/* //* */} a tus creadores {/*  //* */}
                        </span>
                        <span className="text-3xl font-bold">favoritos</span>
                    </div>
                </div>
            </section>

            <section
                className="w-full md:w-1/2 flex items-center
            justify-center px-6 md:px-16 py-8"
            >
                {/* lado derecho - formulario de inicio de sesion */}
                <div className="w-full max-w-md">
                    <h1 className="text-2xl font-medium mb-6 text-center">
                        Iniciar sesión
                        {/* //* */}
                        <span className="text-xl text-[#1d93ba]">
                            (modo invitado)
                        </span>
                    </h1>
                    <form>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none
                                focus:ring-2 focus:ring-[#1d93ba]"
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Contraseña"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none
                                focus:ring-2 focus:ring-[#1d93ba]"
                            />
                            <button
                                type="button"
                                className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-500 cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                <Icon
                                    icon={
                                        showPassword ? 'mdi:eye-off' : 'mdi:eye'
                                    }
                                />
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}
