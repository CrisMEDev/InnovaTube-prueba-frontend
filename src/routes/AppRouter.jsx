import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { LoginScreen } from '../components/screens/LoginScreen';
import { DashboardPrivateRoutes } from './DashboardPrivateRoutes';
import { DashboardPublicRoutes } from './DashboardPublicRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { useAuthStore } from '../hooks';
import {
   onAuthLogout
} from '../store/slices/auth';

export const AppRouter = () => {

   const dispatch = useDispatch();
   const token = localStorage.getItem('token');

   const { checkAuthToken } = useAuthStore();

   useEffect(() => {
      if (!token) {
         dispatch(onAuthLogout());
      } else {
         checkAuthToken();
      }
   }, []);

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