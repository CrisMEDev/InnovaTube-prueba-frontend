import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
   LoginScreen,
   RegisterScreen
} from '../components/screens';

export const DashboardPublicRoutes = () => {
   return (
      <>
         <Routes>

            <Route path='login' element={<LoginScreen />} />
            <Route path='register' element={<RegisterScreen />} />

            <Route path='*' element={<LoginScreen />} />

         </Routes>
      </>
   )
}