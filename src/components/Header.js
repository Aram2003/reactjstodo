import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
      <nav className="navbar navbar-toggleable-md navbar-expand-lg  hh">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>     
          <Link className="navbar-brand jk" to="/">TumoMe</Link>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto po">
              <li className="nav-item ">
                <Link className="nav-link cc" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link cc" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link cc" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link cc" to="/todo">Todo</Link>
              </li>
            </ul>
          </div>     
      </nav>
      </div>
    );
  }
}
export default Header;