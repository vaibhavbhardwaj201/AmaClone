import { BrowserRouter,Route,Routes,Switch } from "react-router-dom"; 
import React from 'react';
import './App.css';
import Checkout from "./Checkout";
import Header from './Header';
import './Header.css'
import Home from './Home';
import Login from "./Login";
function App() {
  return (
  <BrowserRouter>
  <div className="app">
    
   <Routes>
    <Route path="/login" element={<Login/>} />
    <Route path="/checkout" element={<><Header/> <Checkout/></> }/>
     <Route path="/" element={<><Header/><Home/></>}/>
      </Routes>
     </div>
    </BrowserRouter>
  
  );
}

export default App;
