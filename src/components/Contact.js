import React, { Component } from 'react';
import Footer from '../components/Footer.js';
import Jumbotron from '../components/Jumbotron.js';
class About extends Component {
  render() {
    return (
      <div className='ee'>
        <Jumbotron title="Contact" subtitle="Contact us"/>
        <div className="container">
         <p>You can contact us by going TUMO,or send email to this mail:aram.martirosyan.y@tumo.org</p>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.568601829105!2d44.47848296122051!3d40.19641309416824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd719b57919b%3A0x6f5b51aee4e64196!2sTumo!5e0!3m2!1sen!2s!4v1521730565923" allowfullscreen></iframe>
        </div>
        <Footer />
      </div>
    );
  }
}
export default About;
