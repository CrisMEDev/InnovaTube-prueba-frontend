import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { NavBarHome } from '../components/UI/NavBarHome';
import { FavoritesScreen, PrincipalScreen } from '../components/screens';

export const DashboardPrivateRoutes = () => {

   return (
      <>
         <NavBarHome />

         <Routes>

            <Route path='/*' element={<PrincipalScreen />} />

            <Route path='/favoritos' element={<FavoritesScreen />} />

            <Route path='*' element={<PrincipalScreen />} />

         </Routes>
      </>
   )
}