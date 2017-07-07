import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CityInfo from './CityInfo';
import CityDetail from './CityDetail';

class App extends Component {
  render() {
	return (
        <Router>
	       <div className="App">
	           <Route exact path="/cities" component={CityInfo} />
               <Route exact path="/cities/:cityId" component={CityDetail} />
	       </div>
        </Router>
	);
  }
}

export default App;
