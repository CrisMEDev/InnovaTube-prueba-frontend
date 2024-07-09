import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../hooks';

export const NavBarHome = () => {

   const { startLogout } = useAuthStore();

   const logout = (e) => {
      e.preventDefault();

      startLogout();
  }

   return (

      <div className="antialiased bg-gray-100 dark-mode:bg-gray-900">
         <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
            <div x-data="{ open: true }" className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
               <div className="flex flex-row items-center justify-between p-4">
                  <a href="#" className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">InnovaTube</a>
               </div>
               <nav className="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
                  <Link 
                     to={'general'}
                     className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Principal</Link>
                  <Link 
                     to={'favoritos'}
                     className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Favoritos</Link>
                  <button
                     onClick={logout}
                     className="px-4 py-2 mt-2 text-sm text-red-600 font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-red-700 focus:text-red-700 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" >
                        Cerrar sesión
                  </button>

               </nav>
            </div>
         </div>
      </div>
   )
}
