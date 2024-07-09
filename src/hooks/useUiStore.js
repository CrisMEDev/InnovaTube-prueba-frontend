import { useDispatch, useSelector } from 'react-redux';

import { innovaTubeApi } from '../api';
import {
   onChecking,
   onUpdateFavorites
} from '../store/slices/ui';


export const useUiStore = () => {

   const { status, favorites: currentFavs, errorMessage, msg } = useSelector(state => state.ui);
   const dispatch = useDispatch();

   const startUpdateFavorites = async ({ favs }) => {

      dispatch(onChecking());

      try {

         const { data } = await innovaTubeApi.post('user/favorites', { favorites: favs });
         
         dispatch(onUpdateFavorites(data.favorites));

      } catch (error) {
         console.log(error);

         // Atrapa el primer error en un string
         let msg = error.response.data.errors ? error.response.data.errors[0].msg
            : error.response.data.msg;

         if (!msg) msg = '';

         dispatch(onAuthLogout(msg));

      }

   }

   return {
      // Propiedades
      status,
      favorites: currentFavs,
      errorMessage,
      msg,

      // Métodos
      startUpdateFavorites
   }

}
