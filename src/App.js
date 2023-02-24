import React from 'react';
import {Routes,Route,useLocation,Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Gg from './pages/gg'
import Git from './pages/Git'
import Cloud from './pages/Cloud'
import Iot from './pages/Iot'
import Ai from './pages/Ai'
import Vr from './pages/Vr'



const App = () => {
  return (
    
    <>
    <Routes>
    <Route
        path='/'
        element={<Home/>}
      />
      <Route
        path='/g'
        element={<Gg/>}
      />
      <Route
        path='/git'
        element={<Git/>}
      />
      <Route
        path='/Cloud'
        element={<Cloud/>}
      />
      <Route
        path='/Iot'
        element={<Iot/>}
      />
      <Route
        path='/Ai'
        element={<Ai/>}
      />
       <Route
        path='/VI'
        element={<Vr/>}
      />
    </Routes>
    </>
  );
};

export default App;
