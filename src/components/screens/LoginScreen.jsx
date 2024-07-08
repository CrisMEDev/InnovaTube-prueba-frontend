import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useForm, useAuthStore } from '../../hooks';
import { ModalErrorMessage } from '../alerts/ModalErrorMessage';
import {
   clearMsg,
   clearErrorMessage
} from '../../store/slices/auth';

const initState = {
   email: '',
   password: ''
}

export const LoginScreen = () => {

   const dispatch = useDispatch();

   const { status, errorMessage, startLogin, checkAuthToken } = useAuthStore();
   const [formLoginValues, handleFormLoginValues] = useForm(initState);
   const { email, password } = formLoginValues;

   const handleLogin = (e) => {

      e.preventDefault();

      startLogin({ email, password });

   }

   const clearMessages = () => {
      dispatch(clearMsg());
      dispatch(clearErrorMessage());
   }

   if (status === 'checking') {
      return (
         <div
            className='w-full h-screen bg-transparent flex justify-center'
         >
            <h3 className='self-center font-extrabold text-slate-900'>Verificando credenciales</h3>
         </div>
      )
   }

   return (
      <div className="flex min-h-screen items-center justify-center">
         <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
               Iniciar Sesión
            </h4>
            <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
               Coloca tus datos y da click en iniciar sesión
            </p>
            <form onSubmit={handleLogin} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
               <div className="mb-4 flex flex-col gap-6">
                  <div className="relative h-11 w-full min-w-[200px]">
                     <input
                        className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        type='email'
                        value={email}
                        onChange={handleFormLoginValues}
                        name='email'
                        placeholder=" "
                        autoComplete='off'
                     />
                     <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Email
                     </label>
                  </div>
                  <div className="relative h-11 w-full min-w-[200px]">
                     <input
                        type="password"
                        value={password}
                        onChange={handleFormLoginValues}
                        className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        name='password'
                        placeholder=" "
                     />
                     <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Contraseña
                     </label>
                  </div>
               </div>
               <button
                  className="mt-6 block w-full select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="submit"
                  data-ripple-light="true"
               >
                  Iniciar sesión
               </button>
               <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                  ¿Ya tienes una cuenta?
                  <Link
                     className="font-semibold text-blue-500 transition-colors hover:text-blue-700"
                     to="/register"
                  >
                     Registrarse
                  </Link>
               </p>
            </form>
            <div className="w-full pt-5 px-4 mb-8 items-center ">
               <div className="text-sm text-gray-700 py-1">
                  Bienvenido a <a className="text-gray-700 font-semibold" href="https://www.material-tailwind.com/docs/html/form?ref=tailwindcomponents" target="_blank">InnovaTube</a> elaborado por <a href="https://www.creative-tim.com?ref=tailwindcomponents" className="text-gray-700 font-semibold" target="_blank"> InnovaTech</a>.
               </div>
            </div>
         </div>

         <ModalErrorMessage trigger={errorMessage} functionToTrigger={clearMessages} message={errorMessage} />

      </div>
   )
}
