
import React, {useEffect, useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
// import Portfolio from './Pages/Portfolio';
import Qualification from './Pages/Qualification';
import Footer from './Components/Footer';

const App = () => {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {

    function handleScroll() {
      setScrollPosition(window.scrollY);
      
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar  scrollPosition={scrollPosition} />
        <Home />
        <About />
        <Qualification />
        {/* <Portfolio /> */}
        <Contact />
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App