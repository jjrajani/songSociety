import React, { Component } from 'react';
import DetailsNav from './DetailsNav';
import Projects from '../Projects/Projects';
import Friends from '../Friends/Friends';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageView: 'projects'
        };
        this.toggleView = this.toggleView.bind(this);
    }

    toggleView(page) {
        this.setState({ pageView: page });
    }

    render() {
        const projectsCount = this.props.profile.projects
            ? Object.keys(this.props.profile.projects).length
            : 0;
        const friendsCount = this.props.profile.friends
            ? Object.keys(this.props.profile.friends).length
            : 0;
        return (
            <div className="col-xs-12 col-sm-9 details">
                <DetailsNav
                    toggleView={this.toggleView}
                    activeTab={this.state.pageView}
                    projectsCount={projectsCount}
                    friendsCount={friendsCount}
                />
                {this.state.pageView === 'projects'
                    ? <Projects profile={this.props.profile} />
                    : <Friends profile={this.props.profile} />}
            </div>
        );
    }
}

export default Details;
