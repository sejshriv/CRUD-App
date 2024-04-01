import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import ViewD from './components/pages/ViewD';
import Home from './components/pages/Home';
import AddEdit from './components/pages/AddEdit';

import About from './components/pages/About';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Header />
      <ToastContainer position='top-center' />
      <Routes>
        <Route exact path='/' component={Home} />
        <Route exact path='/add' component={AddEdit} />
        <Route exact path='/update/:id' component={AddEdit} />
        <Route exact path='/view/:id' component={ViewD} />
        <Route exact path='/about' component={About} />
      
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
