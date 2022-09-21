
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Qualification from './Pages/Qualification';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Home />
        <About />
        <Qualification />
        <Portfolio />
        <Contact />
      </BrowserRouter>
    </div>
  )
}

export default App