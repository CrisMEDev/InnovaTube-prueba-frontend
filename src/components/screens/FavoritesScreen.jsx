import React from 'react';


import { SearchBox } from '../UI/SearchBox';
import { CardVideoElement } from '../UI/CardVideoElement';


export const FavoritesScreen = () => {
   return (
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12">
         <div className="mx-auto max-w-screen-xl px-4 w-full">
            <SearchBox placeholder='Filtra entre tus favoritos' />
            <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">

            <CardVideoElement />
            <CardVideoElement />
            <CardVideoElement />
            <CardVideoElement />
            <CardVideoElement />
            <CardVideoElement />
            <CardVideoElement />
            <CardVideoElement />

            </div>
         </div>
      </div>
   )
}
