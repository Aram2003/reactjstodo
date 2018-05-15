import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
  render() {
    return (  
     <header>
      <nav className="navbar navbar-toggleable-md navbar-expand-lg navbar-light bg-light hh">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>     
            <Link className="sd" to="/">TumoMe</Link>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="po">
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                  </li>
                <li>
                <Link to="/contact">Contact</Link>
                  </li>
                <li>
                <Link to="/todo">Todo</Link>
                  </li>
            </ul>
          </div>     
      </nav>
      </header>
    );
  }
}
export default Header;
