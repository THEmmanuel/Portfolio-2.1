import React from 'react';
import './App.css';
import NavBar from './Containers/NavBar/NavBar'
import Home from './Containers/Home/Home';
import Brands from './Containers/Brands/Brands';
import Portfolio from './Containers/Portfolio/Portfolio';
import Contact from './Containers/Contact/Contact';
import Footer from './Containers/Footer/Footer';
import Media from './Containers/Media/Media';

function App() {
	return (
		<div className="App">
			{/* <NavBar /> */}
			<div className="App-Content">
				<Home />
				<Brands />
				<Portfolio />
				<Media />
				<Contact />
				<Footer />
			</div>
		</div>
	);
}

export default App;
