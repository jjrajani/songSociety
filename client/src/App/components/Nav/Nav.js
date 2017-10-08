import React, { Component } from 'react';
// Tools
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
// Components
import { Button, Navbar, Nav } from 'react-bootstrap';
import LoginButtons from './components/LoginButtons';
import logo from '../../../assets/logo.png';
import { Glyphicon } from 'react-bootstrap';

const authLinks = [
    {
        location: '/my_profile',
        text: 'Profile'
    }
];

class MyNav extends Component {
    componentDidMount() {
        let route = this.props.history.location.pathname;
        route = route === '/login' ? '/' : route;
        this.props.toggleActiveTab(route);
    }
    goTo(route) {
        if (route === '/workspace/new') {
            this.props.resetWorkspace();
        }
        const { history } = this.props;
        this.props.toggleActiveTab(route);
        this.props.closeNav();
        history.replace(route);
    }

    render() {
        const { navExpanded, activeTab } = this.props.nav;
        const { toggleNav } = this.props;
        const isArtistRoute =
            this.props.history.location.pathname.split('/')[1] === 'artist';
        const incoming =
            this.props.invites.incoming &&
            this.props.invites.incoming.length > 0;
        const isAuthenticated = this.props.auth.isAuthenticated();
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
                        <a className="logo" onClick={() => this.goTo('')}>
                            <img src={logo} alt="The Labz Logo" />
                            The Labz
                        </a>
                    </Navbar.Brand>
                    {incoming &&
                        !isArtistRoute &&
                        isAuthenticated &&
                        <Glyphicon
                            onClick={() => this.goTo('/pending_invites')}
                            glyph="envelope"
                            className="collapsed"
                        />}
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight onSelect={this.props.closeNav}>
                        {incoming &&
                            !isArtistRoute &&
                            isAuthenticated &&
                            <Glyphicon
                                onClick={() => this.goTo('/pending_invites')}
                                glyph="envelope"
                                className="open"
                            />}
                        <Button
                            className={
                                activeTab === '/'
                                    ? 'alive btn-margin btn btn-default'
                                    : 'btn-margin btn btn-default'
                            }
                            onClick={() => this.goTo('/')}
                        >
                            Home
                        </Button>
                        {this.renderAuthLinks()}
                        <Button
                            className={
                                activeTab === '/artist' ||
                                activeTab === '/artists'
                                    ? 'alive btn-margin btn btn-default'
                                    : 'btn-margin btn btn-default'
                            }
                            onClick={() => this.goTo('/artists')}
                        >
                            Artists
                        </Button>
                        {this.renderWorkspaceButton()}
                        <LoginButtons />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

    renderWorkspaceButton() {
        const isAuthenticated = this.props.auth.isAuthenticated();
        const { activeTab } = this.props.nav;
        let linkTo = '/workspace';
        if (isAuthenticated) {
            linkTo = '/workspace/new';
        }
        return (
            <Button
                className={
                    activeTab.includes('workspace')
                        ? 'alive btn-margin btn btn-default'
                        : 'btn-margin btn btn-default'
                }
                onClick={() => this.goTo(linkTo)}
            >
                Workspace
            </Button>
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
                          onClick={() => this.goTo(l.location)}
                      >
                          {l.text}
                      </Button>
                  );
              })
            : null;
    }
}

function mapStateToProps({ auth, nav, invites }) {
    return { auth, nav, invites };
}

export default connect(mapStateToProps, {
    closeNav: actions.navActions.closeNav,
    toggleNav: actions.navActions.toggleNav,
    toggleActiveTab: actions.navActions.toggleActiveTab,
    resetWorkspace: actions.workspaceActions.resetWorkspace
})(withRouter(MyNav));
