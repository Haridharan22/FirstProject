import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import CategoryContact from './views/CategoryContact';
import DetailContact from './views/DetailContact';
import ContactAll from './views/ContactAll';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<ContactAll/>} />
      <Route exact path="/:category" element={<CategoryContact/>}/>
      <Route exact path="/detail/:id" element={<DetailContact/>}/>
    </Routes>
      
    </div>
  );
}

export default App;
