import React from 'react';
import './App.css';
import NavBar from './Containers/NavBar/NavBar'
import Home from './Containers/Home/Home';
import Brands from './Containers/Brands/Brands';
import Portfolio from './Containers/Portfolio/Portfolio';
import Contact from './Containers/Contact/Contact';
import Footer from './Containers/Footer/Footer';
import Media from './Containers/Media/Media';
import Achievements from './Containers/Achievements/Achievements'

function App() {
	return (
		<div className="App">
			<div className="App-Content">
				{/* <NavBar /> */}
				<Home />
				<Brands />
				<Portfolio />
				<Media />
				<Achievements />
				<Contact />
				<Footer />
			</div>
		</div>
	);
}

export default App;
