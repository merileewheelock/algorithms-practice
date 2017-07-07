import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import $ from 'jquery';
import { City, cities } from './City';

class CityInfo extends Component{
	constructor(props) {
		super(props);
		this.state = {
			infoArray: []
		}
		// this.displayInfo = this.displayInfo.bind(this);
	}
	
	componentDidMount() {
		// console.log(`${this.city} is ${this.yearRank} in population`)
		var displayInfoArray = []
		cities.map((city, index)=>{
			displayInfoArray.push(
				<div className="row" key={index}>
					<div className="col-sm-2 col-sm-offset-3">{city.yearRank}</div>
					<div className="col-sm-2"><Link to={`/cities/${city.yearRank}`}>{city.city}</Link></div>
					<div className="col-sm-2">{city.lastPopDensity}</div>
				</div>
			)
		})
		this.setState({
			infoArray: displayInfoArray
		})
	}

	render(){
		return(
			<div>
				{this.state.infoArray}
			</div>
		)
	}
}

export default CityInfo;