import React, { Component } from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
class Home extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <main>
          <div className="hero">
            <div className="hero-content">
              <h1 className="hero-title">TumoMe</h1>
            </div>
          </div>
          <div className="site-section">
            <div className="site-section-inside">
              <div className="section-header">
                <h2>Features</h2>
              </div>
              <div className="feature-box">
                <h5>Responsive Design</h5>
                <p>Use comfortable in different devices!</p>
              </div>
              <div className="feature-box">
                <h5>Fast Loading</h5>
                <p>Fast and Simple</p>
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