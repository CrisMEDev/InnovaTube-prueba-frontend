import { useDispatch, useSelector } from 'react-redux';

import { innovaTubeApi } from '../api';
import {
   onGetVideosBySearchQuery,
   clearMsg,
   onChecking,
   clearErrorMessage,
   onGettingError
} from '../store/slices/videos';


export const useVideosStore = () => {

   const { status, innovaData, errorMessage, msg } = useSelector(state => state.videos);
   const dispatch = useDispatch();

   const startGettingVideosBySearch = async ({ searchQuery = 'música' }) => {

      dispatch(onChecking());

      try {

         const { data } = await innovaTubeApi.get('videos/query', { params: { searchQuery } });

         dispatch(onGetVideosBySearchQuery({
            nextPageToken: data.data.nextPageToken,
            resultsPerPage: data.data.resultsPerPage,
            totalResults: data.data.totalResults,
            prevPageToken: data.data.prevPageToken ? data.data.prevPageToken : null,
            videos: data.data.videos
         }));

      } catch (error) {
         // Atrapa el primer error en un string
         let msg = error.response.data.errors ? error.response.data.errors[0].msg
            : error.response.data.msg;

         if (!msg) msg = '';

         dispatch(onGettingError(msg));

      }

   }


   return {
      // Propiedades
      status,
      innovaData,
      errorMessage,
      msg,

      // Métodos
      startGettingVideosBySearch
   }

}
