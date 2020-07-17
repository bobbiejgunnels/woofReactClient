import React from 'react';

import Breed from './Breed'

class BreedList extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			breeds: [],
			suggestionSent: false,
		}
		this.sendSuggestion = this.sendSuggestion.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSearchQueryChange = this.handleSearchQueryChange.bind(this);
	}

	componentDidMount() {
		fetch('https://localhost:5001/api')
  			.then(response => response.json())
  			.then((data) => {
  				this.setState({
  					breedsData: data.breeds,
  					breeds: data.breeds,
  				})
  			});

	}

	handleInputChange(event) {
    	const value = event.target.value;
    	const name = event.target.name;

	    this.setState({
	      [name]: value
	    });
    }

    sendSuggestion() {
    	let newSuggestion = { 
			name: this.state.name,
			size: this.state.size,
			temperment: this.state.temperment,
			life_Expectancy: this.state.life_Expectancy,
			hair_Type: this.state.hair_Type,
		}

		fetch('https://localhost:5001/suggestions/InsertSuggestion', {
		  method: 'POST', // or 'PUT'
		  headers: {
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(newSuggestion),
		})
		.then(response => response.json())
		.then(data => {
		  console.log('Success:', data);
		  this.setState({
		  	suggestionSent: true,
		  })
		})
		.catch((error) => {
		  console.error('Error:', error);
		});
    }

    handleSearchQueryChange(e) {
    	const value = e.target.value;

    	const results = [];
    	this.state.breedsData.forEach((breed) => {
    		const name = breed.name.toLowerCase();
    		const query = value.toLowerCase();

    		if (name.match(query.replace(/[^\w\s]/gi, ''))) {
    			results.push(breed);
    		}
    	});

    	this.setState({
    		breeds: results
    	});
    }

	render(){
		return(
			<div> 
				<div className="Breeds">

					<label class="BreedSearchInput" for="search">Search:
						<input value={this.state.searchQueary} onChange={this.handleSearchQueryChange} />
					</label>
					{
					  this.state.breeds.map(breed => (
					    <Breed stats={breed} /> 
					   ))
					}
				</div>
				{
					!this.state.suggestionSent && <div className="suggestionSection">
					<h4>Breed suggestions: </h4>
					<p>Name</p>
					<input name="name" value={this.state.name} onChange={this.handleInputChange} /> 
					<p>Size</p>
					<input name="size" value={this.state.size} onChange={this.handleInputChange} />
					<p>Temperment</p>
					<input name="temperment" value={this.state.temperment} onChange={this.handleInputChange} />
					<p>Life Expectancy</p>
					<input name="life_Expectancy" value={this.state.life_Expectancy} onChange={this.handleInputChange} />
					<p>Hair Type</p>
					<input name="hair_Type" value={this.state.hair_Type} onChange={this.handleInputChange} />
					<p>
						<button onClick={this.sendSuggestion}>Send!</button>
					</p>
				</div>

				}

				{
					this.state.suggestionSent && <h2 class="thanks">Thanks!</h2>
				}
				
				<footer class="text-muted footer">
        		<div class="container footertext">
            		&copy; 2020 - Woof  
        		</div>
    			</footer>
		 	</div>	
	 	)
	}
}
export default BreedList;