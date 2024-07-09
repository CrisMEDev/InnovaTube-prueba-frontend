import React from 'react';
import { useSelector } from 'react-redux';

import { CardVideoElement } from '../UI/CardVideoElement';
import { SearchBox } from '../UI/SearchBox';

export const PrincipalScreen = () => {

   const { user } = useSelector(state => state.auth);
   const { innovaData } = useSelector(state => state.videos);
   const { videos } = innovaData;


   return (
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12">
         <div className="mx-auto max-w-screen-xl px-4 w-full">
            <h2 className="mb-4 font-bold text-xl text-gray-600">Bienvenido {user.firstName + ` ${user.lastName}`}</h2>
            <SearchBox />
            <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">

               { videos && videos.map( ({id, snippet}, index) => (
                  <CardVideoElement
                     key={id.videoId}
                     id={id.videoId}
                     description={snippet.description}
                     publishedAt={snippet.publishedAt}
                     title={snippet.publishedAt}
                     url={snippet.thumbnails.medium.url}
                  />
               ) ) }

            </div>
         </div>
      </div>
   )
}
