import React from "react";
import {BrowserRouter, Routes,Route, Navigate} from 'react-router-dom'
import 'animate.css';
import './App.css';
import Menu from './components/Body/Menu'
import Home from './components/Body/Home'
import About from './components/Body/About'
import Contact from './components/Body/Contact'
import MainComponent from './components/MainComponent';
import DishdDetails from './components/Body/DishdDetails'
import Body from './components/Body/Body'
import myStore from './redux/store'
import {Provider} from 'react-redux'

function App() {
  
  return (
    <>
    <Provider store={myStore}>
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
    </Provider>
    </>
  );
}

export default App; 
