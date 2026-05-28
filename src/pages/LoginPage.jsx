import { Icon } from '@iconify/react'
import logo from '../assets/react.svg'
import { useEffect, useState } from 'react'
import { useAuthStore } from '../store/AuthStore'
import { useGenerarCodigosAleatorios } from '../hooks/useGenerarCodigosAleatorios'
import { useCrearUsuarioYSesionMutate } from '../stack/LoginStack'
import { Toaster } from 'sonner'

export const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { setCredenciales } = useAuthStore()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    const { isPending, mutate } = useCrearUsuarioYSesionMutate()

    useEffect(() => {
        const response = useGenerarCodigosAleatorios()
        const correoCompleto = response + '@gmail.com'
        setCredenciales({ email: correoCompleto, password: response })
        setEmail(correoCompleto)
        setPassword(response)
    }, [])

    return (
        <main className="flex h-screen w-full">
            <Toaster />
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
                            a tus creadores{' '}
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
                        Iniciar sesión{' '}
                        <span className="text-xl text-[#1d93ba]">
                            (modo invitado)
                        </span>
                    </h1>
                    <form onSubmit={mutate}>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Email"
                                value={email}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none
                                focus:ring-2 focus:ring-[#1d93ba]"
                            />
                        </div>
                        <div className="relative mb-4">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Contraseña"
                                value={password}
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
                        <button
                            disabled={isPending}
                            className="w-full bg-gray-200 text-gray-500 font-medium py-3 hover:bg-[#1d93ba]
                        rounded transition duration-200 cursor-pointer hover:text-white"
                        >
                            INICIAR SESIÓN
                        </button>
                    </form>
                    <div className="mt-4 text-xs text-gray-500 text-center">
                        Al iniciar sesión y usar MySocialNet, aceptas nuestros{' '}
                        {''}
                        <a href="#" className="text-[#1d93ba]">
                            Términos de servicio
                        </a>{' '}
                        y{' '}
                        <a href="#" className="text-[#1d93ba]">
                            Politica de privacidad.
                        </a>{' '}
                        y confirmas que tienes al menos 18 años.
                    </div>
                    <div className="mt-6 text-center">
                        <a href="#" className="text-[#1d93ba] text-sm">
                            ¿Haz olvidado la ontraseña?
                        </a>
                    </div>
                    <div className="mt- text-center">
                        <a href="#" className="text-[#1d93ba] text-sm">
                            Registrate para MySocialNet
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}
