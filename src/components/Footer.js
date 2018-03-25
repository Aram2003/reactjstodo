import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer class="footer-distributed">
			<div class="footer-left">
				<h3>TumoMe</h3>
				<p class="footer-links">
                <Link to="/">Home</Link>
				|
                <Link to="/about">About</Link>        
				|
				<Link to="/contact">Contact</Link>
        		|
				<Link to="/todo">Todo</Link>
				</p>
				<p class="footer-company-name">TumoMe &copy; 2018</p>
			</div>
			<div class="footer-center">
				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>16 Halabyan St</span>Yerevan,Armenia</p>
				</div>
				<div>
					<i class="fa fa-phone"></i>
					<p>010398413</p>
				</div>
				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:info@tumo.org">info@tumo.org</a></p>
				</div>
			</div>
			<div class="footer-right">
				<p class="footer-company-about">
					<span>About the company</span>
					We are a company creating different websites with different beautifu designs.
				</p>
				<div class="footer-icons">
					<a href="https://www.facebook.com" target="_blank"><i class="fa fa-facebook"></i></a>
					<a href="https://www.twitter.com" target="_blank"><i class="fa fa-twitter"></i></a>
					<a href="https://www.linkedin.com/uas/login" target="_blank"><i class="fa fa-linkedin"></i></a>
					<a href="https://github.com/Aram2003" target="_blank"><i class="fa fa-github"></i></a>
				</div>
			</div>
		</footer>
    );
  }
}
export default Footer;
