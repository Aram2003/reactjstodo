import React, { Component } from 'react';
import Footer from '../components/Footer.js';
import Jumbotron from '../components/Jumbotron.js';

class Other extends Component {
  render() {
    return (
      <div>
        <Jumbotron title="Other" subtitle="Other Works"/>
        <div className="container">
        <p>My Node.js Project working with API and Google Charts</p>
          <iframe 
          className="ifr"
          src="https://rockstargamesproducts.herokuapp.com">     
          </iframe>
        </div>
      <Footer/>
      </div>
    );
  }
}

export default Other;
