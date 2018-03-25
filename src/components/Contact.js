import React, { Component } from 'react';
import Footer from '../components/Footer.js';
import Header from './Header.js';

class About extends Component {
  render() {
    return (
      <div className="container-contact100">
        <Header />
        <div className="wrap-contact100">
          <form className="contact100-form validate-form">
            <span className="contact100-form-title">
              Send Us A Message
      </span>
            <div className="wrap-input100 validate-input" data-validate="Name is required">
              <label className="label-input100" >Full name</label>
              <input id="name" class="input100" type="text" name="name" placeholder="Enter your name..." />
              <span className="focus-input100"></span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
              <label className="label-input100" for="email">Email Address</label>
              <input id="email" class="input100" type="text" name="email" placeholder="Enter your email..." />
              <span className="focus-input100"></span>
            </div>

            <div className="wrap-input100">
              <div className="label-input100">What do you need?</div>
              <div>
                <select className="js-select2" name="service">
                  <option>Help</option>
                  <option>Donate</option>
                  <option>Offer</option>
                </select>
                <div className="dropDownSelect2"></div>
              </div>
              <span className="focus-input100"></span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Message is required">
              <label className="label-input100" for="message">Message</label>
              <textarea id="message" class="input100" name="message" placeholder="Type your message here..."></textarea>
              <span className="focus-input100"></span>
            </div>
            <div className="container-contact100-form-btn">
              <button className="contact100-form-btn">
                Send
        </button>
            </div>
          </form>

          <div class="contact100-more flex-col-c-m gt">
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default About;
