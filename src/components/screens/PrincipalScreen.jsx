import React from 'react';
import { useSelector } from 'react-redux';

import { useVideosStore } from '../../hooks';
import { CardVideoElement } from '../UI/CardVideoElement';
import { SearchBox } from '../UI/SearchBox';

export const PrincipalScreen = () => {

   const { startGettingVideosBySearch } = useVideosStore();
   const { user } = useSelector(state => state.auth);
   const { favorites } = useSelector(state => state.ui);
   const { innovaData } = useSelector(state => state.videos);
   const { videos } = innovaData;

   const handleSearchVideos = (searchQuery) => {
      startGettingVideosBySearch({ searchQuery });
   }

   return (
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12">
         <div className="mx-auto max-w-screen-xl px-4 w-full">
            <h2 className="mb-4 font-bold text-xl text-gray-600">Bienvenido {user.firstName + ` ${user.lastName}`}</h2>
            <SearchBox functionToSearch={handleSearchVideos} />
            <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">

               {videos && videos.map(({ id, snippet }, index) => {
                  const isFav = favorites && favorites.find((fav) => (id.videoId === fav.id.videoId) );
                  
                  return <CardVideoElement
                     key={id.videoId}
                     id={id.videoId}
                     favorite={isFav}
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
