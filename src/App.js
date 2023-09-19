import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';
function App(){
  return (
      <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        

      </Routes>
      </BrowserRouter>

     </>
  );
}
export default App;