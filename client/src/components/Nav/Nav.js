import React, { Component } from 'react';
// Tools
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
// Components
import { Button, Navbar, Nav } from 'react-bootstrap';
import LoginButtons from './components/LoginButtons';
import logo from '../../assets/logo.png';

const authLinks = [
    {
        location: '/profile',
        text: 'Profile'
    },
    {
        location: '/workspace',
        text: 'Workspace'
    }
];

class MyNav extends Component {
    render() {
        const location = this.props.history.location.pathname;
        const { history } = this.props;
        return (
            <Navbar
                onToggle={this.props.toggleNav}
                expanded={this.props.navExpanded}
                inverse
                fixedTop
                className="nav"
            >
                <Navbar.Header>
                    <Navbar.Brand>
                        <a
                            className="logo"
                            onClick={this.props.goTo.bind(this, '', history)}
                        >
                            <img src={logo} alt="Song Society Logo" />
                            Song Society
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight onSelect={this.props.closeNav}>
                        <Button
                            className={
                                location === '/'
                                    ? 'alive btn-margin'
                                    : 'btn-margin'
                            }
                            onClick={this.props.goTo.bind(this, '/', history)}
                        >
                            Home
                        </Button>
                        {this.renderAuthLinks()}
                        <LoginButtons />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

    renderAuthLinks() {
        const location = this.props.history.location.pathname;
        const { history } = this.props;
        const isAuthenticated = this.props.auth.isAuthenticated();
        return isAuthenticated
            ? authLinks.map((l, i) => {
                  return (
                      <Button
                          key={i}
                          className={
                              location === l.location
                                  ? 'alive btn-margin'
                                  : 'btn-margin'
                          }
                          onClick={this.props.goTo.bind(
                              this,
                              l.location,
                              history
                          )}
                      >
                          {l.text}
                      </Button>
                  );
              })
            : null;
    }
}

function mapStateToProps({ auth, navExpanded }) {
    return { auth, navExpanded };
}

export default connect(mapStateToProps, {
    openNav: actions.navActions.openNav,
    closeNav: actions.navActions.closeNav,
    toggleNav: actions.navActions.toggleNav,
    goTo: actions.navActions.goTo
})(withRouter(MyNav));
