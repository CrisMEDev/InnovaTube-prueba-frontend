import React, { useEffect } from 'react'

export const ModalErrorMessage = ({trigger = false, message, functionToTrigger}) => {

   const openModal = () => {
      const modal = document.getElementById("showModal1");
      modal.classList.remove("hidden");
   }

   const closeModal = () => {
      const modal = document.getElementById("showModal1");
      modal.classList.add("hidden");
      functionToTrigger();
   }

   useEffect(() => {
      if (!trigger) return
      openModal()
   }, [trigger]);

  return (
   <div
      id='showModal1'
      className="hidden fixed inset-0 w-full h-full z-20 bg-black bg-opacity-50 duration-300 overflow-y-auto "
      x-show="showModal1"
      x-transition:enter="transition duration-300"
      x-transition:enter-start="opacity-0"
      x-transition:enter-end="opacity-100"
      x-transition:leave="transition duration-300"
      x-transition:leave-start="opacity-100"
      x-transition:leave-end="opacity-0"
      >
      <div className="relative sm:w-3/4 md:w-1/2 lg:w-1/3 mx-2 sm:mx-auto my-10 opacity-100">
         <div
         className="relative bg-white shadow-lg rounded-md text-gray-900 z-20"
         onClick={() => closeModal() }
         x-show="showModal1"
         x-transition:enter="transition transform duration-300"
         x-transition:enter-start="scale-0"
         x-transition:enter-end="scale-100"
         x-transition:leave="transition transform duration-300"
         x-transition:leave-start="scale-100"
         x-transition:leave-end="scale-0"
         >
            <header className="flex items-center justify-between p-2">
               <h2 className="font-semibold">Error</h2>
               <button className="focus:outline-none p-2" onClick={() => closeModal() }>
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                  <path
                     d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                  ></path>
                  </svg>
               </button>
            </header>
            <main className="p-2 text-center">
               <p>
                  {message}
               </p>
            </main>
            <footer className="flex justify-center p-2">
               <button
                  className="bg-red-600 font-semibold text-white p-2 w-32 rounded-full hover:bg-red-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300"
                  onClick={() => closeModal() }
               >
                  Regresar
               </button>
            </footer>
         </div>
      </div>
   </div>
  )
}