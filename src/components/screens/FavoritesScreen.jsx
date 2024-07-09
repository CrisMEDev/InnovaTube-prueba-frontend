import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { SearchBox } from '../UI/SearchBox';
import { CardVideoElement } from '../UI/CardVideoElement';
import { getFavoritesByTitle } from '../../helpers/getFavoritesByTitle';
import {
   onSearchQueryFavs
} from '../../store/slices/ui/uiSlice';

export const FavoritesScreen = () => {

   const dispatch = useDispatch();
   const { favorites, searchQueryFavs } = useSelector(state => state.ui);
   const [favsFiltered, setFavsFiltered] = useState([]);

   const handleSearchVideos = (searchQuery) => {

      const filter = getFavoritesByTitle({ query: searchQuery, favs: favorites });
      setFavsFiltered(filter);

      dispatch(onSearchQueryFavs(searchQuery));

   }


   return (
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12">
         <div className="mx-auto max-w-screen-xl px-4 w-full">
            <SearchBox functionToSearch={handleSearchVideos} placeholder='Filtra entre tus favoritos' />
            <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">

               {/* Renderiza los favoritos filtrados por un criterio de búsqueda */}
               {(!!favorites && !!searchQueryFavs) && favsFiltered.map(({ id, snippet }, index) => {

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

               {/* Renderiza los favoritos si no hay criterio de búsqueda */}
               {(!!favorites && !searchQueryFavs) && favorites.map(({ id, snippet }, index) => {
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
