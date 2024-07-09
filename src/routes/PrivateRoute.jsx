import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {

   const { user } = useSelector(state => state.auth);

   return (
      !!(user.uid)
         ? children
         : <Navigate to='/' />   // Si no ha iniciado sesión e intenta accesar a otra ruta
                                 // lo regresa al home
   );

}