import React from 'react';
import Navbar from './component/navBar'
import Home from './component/home'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar /> 
      <Home/> 
      </div>
     
    </BrowserRouter>
  );
}



export default App;