import React, { Component } from 'react';

class Workspaces extends Component {
    componentWillMount() {
        this.setState({ profile: {} });
        const { userProfile, getProfile } = this.props.auth;
        if (!userProfile) {
            getProfile((err, profile) => {
                this.setState({ profile });
            });
        } else {
            this.setState({ profile: userProfile });
        }
    }
    render() {
        // const { profile } = this.state;
        return <div className="container main_content">workspaces</div>;
    }
}

export default Workspaces;
