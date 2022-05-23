import React from 'react';

import Menu from '../menu/Menu';
import Slider from './slider/Slider';
import Footer from '../footer/Footer';
import Header from '../menu/Header';


class Home extends React.Component {

	render() {

		return(


			<>

			<Header>

			</Header>
			
			<br>
			</br>

			<Menu />
		
		  	  		
			<Slider />

	  		<Footer />

	  		</>

		)

	}

}

export default Home;