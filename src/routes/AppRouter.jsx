import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoginScreen } from '../components/screens/LoginScreen';
import { DashboardPrivateRoutes } from './DashboardPrivateRoutes';
import { DashboardPublicRoutes } from './DashboardPublicRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

   return (
      <BrowserRouter>
         <Routes>

            <Route path='/*' element={
               <PublicRoute>
                  <DashboardPublicRoutes />
               </PublicRoute>
            } />

            <Route path='/principal/*' element={
               <PrivateRoute>
                  <DashboardPrivateRoutes />
               </PrivateRoute>
            } />

            <Route path='*' element={
               <LoginScreen />
            } />

         </Routes>
      </BrowserRouter>
   )
}