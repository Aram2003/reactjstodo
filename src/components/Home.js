import React, { Component } from 'react';
import Footer from './Footer.js';
import Jumbotron from './Jumbotron.js';
import Header from './Header.js';
class Home extends Component {
  render() {
    return (
      <div className='wrapper'>
      <Header/>
        <Jumbotron title="Welcome to " subtitle="My ReactJS App" />
        <div className="content">
          <h2 className="bn">Hello World</h2>
          <p className="qw">What’s more friendly that a simple “hello”? This is probably the most common trend that I come across and is simply everywhere in designer portfolios these days. The idea is of course to make the site seem that much more alive and friendly, as if it’s a person welcoming you in. This is often effective when combined with a photo or
              tion of the designer so it’s clear who the message is coming from.What’s more friendly that a simple “hello”? This is probably the most common trend that I come across and is simply everywhere in designer portfolios these days. The idea is of course to make the site seem that much more alive and friendly, as if it’s a person welcoming you in. This is often effective when combined with a photo or
        </p>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Home;