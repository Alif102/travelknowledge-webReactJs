import React from 'react';

import { Route, Routes } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home"
import About from "./Components/About"


import Navbaar from './Components/Navbaar';
import CarRental from './Components/CarRental';
import Vacation from './Components/Vacation';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      
      
      <Navbaar/>
      
        
      <Routes>
    
      
          <Route exact path="/travelknowledge-webReactJs" element={<Home/>} />
          <Route exact path="/flights" element={<About/>} />
          
          <Route exact path="/car-rental" element={<CarRental/>} />
          <Route exact path="/vacation" element={<Vacation/>} />

          
         
        
      </Routes>
      <Footer/>
      
  


     
    </div>
  );
}

export default App;
