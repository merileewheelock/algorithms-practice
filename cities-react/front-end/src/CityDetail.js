import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import $ from 'jquery';
import { City, cities } from './City';

class CityDetail extends Component{
	constructor(props) {
		super(props);
		this.state = {
			theDetailsArray: []
		}
		this.back = this.back.bind(this)
	}

	componentDidMount() {
		var cityIndex = parseInt(this.props.match.params.cityId) - 1
		var currentDetailArray = [];
		currentDetailArray.push(cities[cityIndex])
		this.setState({
			theDetailsArray: currentDetailArray
		})
	}

	back(){
		this.props.history.push('/cities');
	}

	render(){
		var infoDiv = [];
		if(this.state.theDetailsArray[0] != undefined){
			infoDiv.push(
				<div key="2">
					<h1>{this.state.theDetailsArray[0].city}</h1>
					<p>State: {this.state.theDetailsArray[0].state}</p>
					<p>Year Estimate: {this.state.theDetailsArray[0].yearEstimate}</p>
					<p>Last Census: {this.state.theDetailsArray[0].lastCensus}</p>
					<p>Change: {this.state.theDetailsArray[0].change}</p>
					<p>Land Area: {this.state.theDetailsArray[0].landArea}</p>
					<p>Last Population Density: {this.state.theDetailsArray[0].lastPopDensity}</p>
					<p>Lat/Lon: {this.state.theDetailsArray[0].latLon}</p>
				</div>
			)
		}else{
			infoDiv.push(<div key="1">Loading ...</div>)
		}
		return(
			<div>
				{infoDiv}
				<button onClick={this.back} className="btn btn-success">Home</button>
			</div>
		)
	}
}

export default CityDetail;