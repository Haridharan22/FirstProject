import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import AddData from './components/AddData';
import AlterData from './components/AlterData';




function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}>
        
        </Route>
        <Route path="/add" element={<AddData/>}>
        </Route>
        <Route path="/edit/:id" element={<AlterData/>}>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
