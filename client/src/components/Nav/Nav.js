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
        location: '/workspace/new',
        text: 'Workspace'
    }
];

const noAuthLinks = [
    {
        location: '/workspace',
        text: 'Workspace'
    }
];

class MyNav extends Component {
    myGoTo(route) {
        const { history } = this.props;
        this.props.toggleActiveTab(route);
        this.props.closeNav();
        history.replace(route);
    }

    render() {
        const { navExpanded, activeTab } = this.props.nav;
        const { toggleNav } = this.props;
        return (
            <Navbar
                onToggle={toggleNav}
                expanded={navExpanded}
                inverse
                fixedTop
                className="nav"
            >
                <Navbar.Header>
                    <Navbar.Brand>
                        <a className="logo" onClick={() => this.myGoTo('')}>
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
                                activeTab === 'home'
                                    ? 'alive btn-margin btn btn-default'
                                    : 'btn-margin btn btn-default'
                            }
                            onClick={() => this.myGoTo('/')}
                        >
                            Home
                        </Button>
                        {this.renderNoAuthLinks()}
                        {this.renderAuthLinks()}
                        <LoginButtons />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

    renderAuthLinks() {
        const isAuthenticated = this.props.auth.isAuthenticated();
        const { activeTab } = this.props.nav;
        return isAuthenticated
            ? authLinks.map((l, i) => {
                  return (
                      <Button
                          key={i}
                          className={
                              activeTab === l.location
                                  ? 'alive btn-margin btn btn-default'
                                  : 'btn-margin btn btn-default'
                          }
                          onClick={() => this.myGoTo(l.location)}
                      >
                          {l.text}
                      </Button>
                  );
              })
            : null;
    }

    renderNoAuthLinks() {
        const isAuthenticated = this.props.auth.isAuthenticated();
        const { activeTab } = this.props.nav;
        return !isAuthenticated
            ? noAuthLinks.map((l, i) => {
                  return (
                      <Button
                          key={i}
                          className={
                              activeTab === l.location
                                  ? 'alive btn-margin btn btn-default'
                                  : 'btn-margin btn btn-default'
                          }
                          onClick={() => this.myGoTo(l.location)}
                      >
                          {l.text}
                      </Button>
                  );
              })
            : null;
    }
}

function mapStateToProps({ auth, nav }) {
    return { auth, nav };
}

export default connect(mapStateToProps, {
    openNav: actions.navActions.openNav,
    closeNav: actions.navActions.closeNav,
    toggleNav: actions.navActions.toggleNav,
    toggleActiveTab: actions.navActions.toggleActiveTab
})(withRouter(MyNav));
