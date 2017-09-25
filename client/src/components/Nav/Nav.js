import React, { Component } from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class MyNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navExpanded: false
        };
    }

    setNavExpanded() {
        this.setState({ navExpanded: !this.state.navExpanded });
    }

    closeNav() {
        this.setState({ navExpanded: false });
    }
    goTo(route) {
        this.props.history.replace(`/${route}`);
        this.setState({ navExpanded: false });
    }
    logout() {
        this.props.auth.logout();
    }
    login() {
        this.props.auth.login();
    }

    render() {
        const location = this.props.history.location.pathname;
        const isAuthenticated = this.props.auth.isAuthenticated();
        return (
            <Navbar
                onToggle={this.setNavExpanded.bind(this)}
                expanded={this.state.navExpanded}
                inverse
                fixedTop
                className="nav"
            >
                <Navbar.Header>
                    <Navbar.Brand>
                        <a
                            className="logo"
                            onClick={this.goTo.bind(this, 'home')}
                        >
                            Song Society
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight onSelect={this.closeNav.bind(this)}>
                        <Button
                            className={
                                location === '/home'
                                    ? 'alive btn-margin'
                                    : 'btn-margin'
                            }
                            onClick={this.goTo.bind(this, 'home')}
                        >
                            Home
                        </Button>
                        {isAuthenticated &&
                            <Button
                                className={
                                    location === '/profile'
                                        ? 'alive btn-margin'
                                        : 'btn-margin'
                                }
                                onClick={this.goTo.bind(this, 'profile')}
                            >
                                Profile
                            </Button>}
                        {isAuthenticated &&
                            <Button
                                className={
                                    location === '/workspaces'
                                        ? 'alive btn-margin'
                                        : 'btn-margin'
                                }
                                onClick={this.goTo.bind(this, 'workspaces')}
                            >
                                Workspaces
                            </Button>}
                        {isAuthenticated &&
                            <Button
                                className="btn-margin"
                                onClick={this.logout.bind(this)}
                            >
                                Log Out
                            </Button>}
                        {!isAuthenticated &&
                            <Button
                                className="btn-margin"
                                onClick={this.login.bind(this)}
                            >
                                Log In
                            </Button>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default withRouter(MyNav);
