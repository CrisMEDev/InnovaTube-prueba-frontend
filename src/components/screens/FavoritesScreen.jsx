import React from 'react';
import { useSelector } from 'react-redux';


import { SearchBox } from '../UI/SearchBox';
import { CardVideoElement } from '../UI/CardVideoElement';


export const FavoritesScreen = () => {

   const { favorites } = useSelector(state => state.ui);

   const handleSearchVideos = (searchQuery) => {

   }

   
   return (
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12">
         <div className="mx-auto max-w-screen-xl px-4 w-full">
            <SearchBox functionToSearch={handleSearchVideos} placeholder='Filtra entre tus favoritos' />
            <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">

               {favorites && favorites.map(({ id, snippet }, index) => {
                  return <CardVideoElement
                     key={id.videoId}
                     id={id.videoId}
                     favorite={true}
                     description={snippet.description}
                     publishedAt={snippet.publishedAt}
                     title={snippet.title}
                     url={snippet.thumbnails.high.url}
                  />
               })}

            </div>
         </div>
      </div>
   )
}
