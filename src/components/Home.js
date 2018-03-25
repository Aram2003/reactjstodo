import React, { Component } from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
import Jumbotron from './Jumbotron.js';
class Home extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <main>
          <div className="hero">
            <div className="hero-content">
              <h1 className="hero-title">TumoMe</h1>
              <p className="tite">The best and most comprehensive website ever.</p>
            </div>
          </div>
          <div className="site-section">
            <div className="site-section-inside">

              <div className="section-header">
                <h2>Features</h2>
              </div>
              <div className="feature-box">
                <h5>Easy to Use</h5>
                <p>Use it!</p>
              </div>

              <div className="feature-box">
                <h5>Fun to Use</h5>
                <p>Like it!</p>
              </div>
              <div className="feature-box">
                <h5>You'll Love It</h5>
                <p>Share it!</p>
              </div>
            </div>
          </div>
          <div className="site-section site-section-secondary">
            <div className="site-section-inside">

              <div className="section-header">
                <h2>What the people say</h2>
              </div>

              <div className="testimonial-box">
                <div className="testimonial-content">
                  Their service is by far the most influential I've ever seen.
                </div>
                <div className="testimonial-author">
                  <h5>David East</h5>
                  <span>King of Firebase</span>
                </div>
              </div>
              <div className="testimonial-box">
                <div className="testimonial-content">
                  Their service is by far the most influential I've ever seen.
                </div>
                <div className="testimonial-author">
                  <h5>Holly Lloyd</h5>
                  <span>Queen of Scotch</span>
                </div>
              </div>
              <div className="testimonial-box">
                <div className="testimonial-content">
                  Their service is by far the most influential I've ever seen.
                </div>
                <div className="testimonial-author">
                  <h5>Brad Green</h5>
                  <span>King of Angular</span>
                </div>
              </div>

            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
export default Home;