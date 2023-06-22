import React from 'react';
import './App.css';
import NavBar from './Containers/NavBar/NavBar'
import Home from './Containers/Home/Home';
import Brands from './Containers/Brands/Brands';
import Portfolio from './Containers/Portfolio/Portfolio';
import Contact from './Containers/Contact/Contact';
import Footer from './Containers/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Home />
	  <Brands/>
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
