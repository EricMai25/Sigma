import React from 'react';
import './App.css';
import Navi from './components/Nav.jsx'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home.jsx'



function App() {
  return (
    <div className="App">
       <Home/>
    </div>
  );
}

export default App;
