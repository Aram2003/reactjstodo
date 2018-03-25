import React, { Component } from 'react';
import Footer from './Footer.js';
import Jumbotron from './Jumbotron.js';
import Header from './Header.js';
class About extends Component {
  render() {
    return (
      <div className='ee'>
        <Header />
        <Jumbotron title="About Me!" subtitle="All about me" />
        <div className="container">
          <p clasName="fg">I am Aram Martirosyan.I am 14.I live in Yerevan,Armenia.I want to be a good programmer and I work hard for it.
            I go to TUMO Creative Center for Technologies where I learn programming.I went to Programming course
            and I have passed all 3 courses.Now I go to web development 3rd <br />course and ReactJS course and that
             is very good for me because i love to code.
          </p>
          <img
            className="tw"
            src="https://ocdn.eu/pulscms-transforms/1/Au4ktkqTURBXy9mODk2MTViYWNlZjhiMWNkYThiNGNiZDliMDdiNWNiNi5qcGVnkpUDAM0BmM0VuM0MN5MFzQMUzQG8" width="300" height="160" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
