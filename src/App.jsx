import React from "react";
import {BrowserRouter, Routes,Route, Switch, Navigate} from 'react-router-dom'
import 'animate.css';
import './App.css';
import Menu from './components/Body/Menu'
import Home from './components/Body/Home'
import About from './components/Body/About'
import Contact from './components/Body/Contact'
import MainComponent from './components/MainComponent';
import DishdDetails from './components/Body/DishdDetails'
import Body from './components/Body/Body'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/menu" element={<MainComponent/>}/>
        <Route path="/menu-details/:id" element={<DishdDetails/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/" element={<Navigate to="/home" />}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App; 
