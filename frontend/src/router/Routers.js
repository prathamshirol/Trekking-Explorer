import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from './../pages/Home';
import About from './../pages/About';
import Tours from './../pages/Tours';
import TourDetails from './../pages/TourDetails';
import Login from './../pages/Login';
import Register from './../pages/Register';
import SearchResultList from './../pages/SearchResultList';
import Thankyou from '../pages/Thankyou';
import ForgotPassword from './../components/ForgotPassword';
import PasswordReset from './../components/PasswordReset';
import { AuthContext } from "./../context/AuthContext";
import { useContext } from "react";
const Routers = () => {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/tours' element={<Tours/>} />
        <Route path='/tours/:id' element={<TourDetails/>} />
      {
        !user && 
      <Route path='/login' element={<Login/>} />
      }  
      {
        !user && 
      
        <Route path='/register' element={<Register/>} />
      }  
   
        <Route path='/tours/search' element={<SearchResultList/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        <Route path='/password-reset/:userId/:token' element={<PasswordReset/>} />
       {
       user &&      <Route path='/thank-you' element={<Thankyou/>} />
       } <Route path='*' element={<Navigate to='/home'/>} />
    </Routes>
  ) 
}

export default Routers
