import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="left brand-logo">
            Emaily
          </Link>
          {this.renderLogin()}
        </div>
      </nav>
    );
  }

  renderLogin() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <ul className="right">
            <li>
              <a href="/auth/google">Login With Google</a>
            </li>
            <li>
              <a href="/auth/facebook">Login With Facebook</a>
            </li>
          </ul>
        );
      default:
        return (
          <ul className="right">
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </ul>
        );
    }
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
