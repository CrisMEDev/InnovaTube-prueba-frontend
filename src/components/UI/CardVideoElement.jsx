import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { useUiStore } from '../../hooks/useUiStore';


export const CardVideoElement = ({ favorite = false, id, publishedAt, title, description, url }) => {

   const [toggleFavorite, setToggleFavorite] = useState(favorite);
   const { favorites } = useSelector(state => state.ui);
   const { innovaData } = useSelector(state => state.videos);
   const { startUpdateFavorites } = useUiStore();

   const handleToggleFavorite = () => {
      setToggleFavorite(!toggleFavorite);

      if (toggleFavorite){
         const deleteVideoId = document.getElementById(id).id;
         const updateFavs = [...favorites];
         const index = updateFavs.find((fav, index) => {
            if (deleteVideoId === fav.id.videoId)
               return index;
         });
         updateFavs.splice(index, 1);

         startUpdateFavorites({favs: updateFavs});
      }

      if (!toggleFavorite) {
         const videoId = document.getElementById(id).id;
         const fav = innovaData.videos.find((vid, index) => {
            if (vid.id.videoId === videoId)
               return innovaData.videos[index];
         });

         const updateFavs = favorites?.length ? [...favorites] : [];
         updateFavs.push(fav);
         
         startUpdateFavorites({ favs: updateFavs });
      }
   }

   return (
      <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
         <button
            id={id}
            onClick={handleToggleFavorite}
            type='button'
            className="text-slate-300 hover:text-cyan-800 absolute z-30 top-2 right-0 mt-2 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill={`${toggleFavorite ? '#FF073D' : 'none'}`} viewBox="0 0 24 24" strokeWidth="1.5" stroke={`${toggleFavorite ? '#FF073D' : 'currentColor'}`} className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
         </button>
         <a className="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</a>
         <div className="h-auto overflow-hidden">
            <div className="h-44 overflow-hidden relative">
               <img className='object-cover' src={url ? url : "https://picsum.photos/400/400"} alt="" />
            </div>
         </div>
         <div className="bg-white py-4 px-3">
            <h3 className="text-xs mb- font-medium">{title}</h3>
            <div className="flex justify-between items-center">
               <p className="text-xs text-gray-400">
                  {description}
               </p>
               <div className="relative z-40 flex items-center gap-2">
                  <a className="text-cyan-800 hover:text-blue-500">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                     </svg>
                  </a>
               </div>
            </div>
         </div>
      </div>
   )
}
