import React from 'react';

class Breed extends React.Component{
	render(){
		return <article> 
			<h2>{this.props.stats.name}</h2>
			<section>
				<p>ID: {this.props.stats.id}</p>
				<p>Hair type: {this.props.stats.hair_Type}</p>
			</section>
		 </article>	
	}
}
export default Breed;