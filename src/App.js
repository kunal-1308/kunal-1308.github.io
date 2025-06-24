import React, { Component } from "react";
// import { BrowserRouter as Router , Route} from 'react-router-dom';

import "./App.css";
import Nav from "./components/Nav";
class App extends Component {
	render() {
		return (
			<div className="App">
				<Nav />
			</div>
		);
	}
}

export default App;
