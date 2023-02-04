import React, { Component } from 'react';
// import { BrowserRouter as Router , Route} from 'react-router-dom';

import './App.css';
import Nav from './components/Nav';
import Me from './components/me/Me';
import Contact from './components/contact/Contact';
import Interest from "./components/interests/Interest";
import Certification from './components/certifications/Certification';

class App extends Component{
  render(){
    return (
      <div className="App">
  
        <Nav/>
        {/* <Me/>
        <Contact/>
         <Interest/>
        <Certification/> */}
        <h4 className=''>Made with <span className='text-danger'>❤</span> by me using React.Js</h4>
      </div>
    );
  }
}

export default App;
