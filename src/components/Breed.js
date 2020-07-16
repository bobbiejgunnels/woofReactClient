import React from 'react';

class Breed extends React.Component{
	render(){
		return (
			<div class="Breed">
				<h2>{this.props.stats.name}</h2>
					<div>
						<p><b>Size: {this.props.stats.size}</b></p>
						<p><b>Temperment: {this.props.stats.temperment}</b></p>
						<p><b>Life Expectancy: {this.props.stats.life_Expectancy}</b></p>
						<p><b>Hair type: {this.props.stats.hair_Type}</b></p>
					</div>
			</div>
		 )
		 
		
	}
}
export default Breed;