import React, { Component } from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
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
    constructor(props) {
        super(props);
        this.state = {
            navExpanded: false
        };
    }

    openNav() {
        this.setState({ navExpanded: !this.state.navExpanded });
    }

    closeNav() {
        this.setState({ navExpanded: false });
    }
    goTo(route) {
        this.props.history.replace(`${route}`);
        this.setState({ navExpanded: false });
    }

    render() {
        const location = this.props.history.location.pathname;
        return (
            <Navbar
                onToggle={this.openNav.bind(this)}
                expanded={this.state.navExpanded}
                inverse
                fixedTop
                className="nav"
            >
                <Navbar.Header>
                    <Navbar.Brand>
                        <a className="logo" onClick={this.goTo.bind(this, '')}>
                            <img src={logo} alt="Song Society Logo" />
                            Song Society
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight onSelect={this.closeNav.bind(this)}>
                        <Button
                            className={
                                location === '/'
                                    ? 'alive btn-margin'
                                    : 'btn-margin'
                            }
                            onClick={this.goTo.bind(this, '/')}
                        >
                            Home
                        </Button>
                        {this.renderAuthLinks()}
                        {this.renderLogin()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

    renderAuthLinks() {
        const location = this.props.history.location.pathname;
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
                          onClick={this.goTo.bind(this, l.location)}
                      >
                          {l.text}
                      </Button>
                  );
              })
            : null;
    }

    renderLogin() {
        const { login, logout } = { ...this.props.auth };
        const isAuthenticated = this.props.auth.isAuthenticated();
        return isAuthenticated
            ? <Button className="btn-margin" onClick={logout.bind(this)}>
                  Log Out
              </Button>
            : <Button className="btn-margin" onClick={login.bind(this)}>
                  Log In
              </Button>;
    }
}

export default withRouter(MyNav);
