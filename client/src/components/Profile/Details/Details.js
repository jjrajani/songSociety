import React, { Component } from 'react';
// tools
import { connect } from 'react-redux';
// components
import DetailsNav from './DetailsNav';
import Projects from '../Projects/Projects';
import Friends from '../Friends/Friends';

class Details extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-9 details">
                <DetailsNav />
                {this.props.pageView === 'projects'
                    ? <Projects profile={this.props.profile} />
                    : <Friends profile={this.props.profile} />}
            </div>
        );
    }
}

function mapStateToProps({ profile, projects, friends }) {
    return { profile, pageView: profile.pageView };
}

export default connect(mapStateToProps)(Details);
