import React, { useState } from 'react';

export const SearchBox = ({
   placeholder = '¿Sobre qué deseas buscar?',
   functionToSearch = ()=>{}
}) => {

   const [searchQuery, setSearchQuery] = useState('');

   const handleSearch = (e) => {
      setSearchQuery(e.target.value);
   }

   const handleSubmit = (e) => {
      e.preventDefault();

      functionToSearch(searchQuery);
      
   }
   
   return (
      
      <div style={{maxWidth: '700px', margin: '15px auto'}} >

         <form className="flex items-center">
            <label htmlFor="voice-search" className="sr-only">Buscar</label>
            <div className="relative w-full">
               <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
               </div>
               <input type="text" name='searchQuery' onChange={handleSearch} id="voice-search" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-slate-200 dark:border-slate-300 dark:placeholder-slate-400 dark:text-slate-800 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required="" />
               <button type="button" className="flex absolute inset-y-0 right-0 items-center pr-3">
                  <svg aria-hidden="true" className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-slate-300 dark:hover:text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path></svg>
               </button>
            </div>
            <button onClick={handleSubmit} type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-sky-900-700 border border-bg-sky-900-700 hover:bg-sky-900-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-cyan-600 dark:hover:bg-cyan-600 dark:focus:ring-bg-cyan-600">
               <svg aria-hidden="true" className="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Buscar
            </button>
         </form>

      </div>
   )
}
