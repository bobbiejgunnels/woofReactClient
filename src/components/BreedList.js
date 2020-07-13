import React from 'react';

import Breed from './Breed'

class BreedList extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			breeds: []
		}
		
	}

	componentDidMount() {
		fetch('https://localhost:5001/api')
  			.then(response => response.json())
  			.then((data) => {
  				this.setState({
  					breeds: data.breeds
  				})
  			});

	}

	render(){
		return(
			<div> 
				
				<div className="Breeds">
				{
				  this.state.breeds.map(breed => (
				    <Breed stats={breed} /> 
				   ))
				}
				</div>
		 	</div>	
	 	)
	}
}
export default BreedList;