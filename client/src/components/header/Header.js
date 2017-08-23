import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="left brand-logo">
            Emaily
          </Link>
          <ul className="right">
            <li>
              <Link to="auth/google">Login With Google</Link>
            </li>
            <li>
              <Link to="auth/facebook">Login With Facebook</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
