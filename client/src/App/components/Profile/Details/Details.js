import React from 'react';
// Tools
import { connect } from 'react-redux';
// Components
import DetailsNav from './DetailsNav';
import Projects from '../Projects/Projects';
import Followers from '../Followers/Followers';
import Collaborations from '../Collaborations/Collaborations';

const Details = ({ pageView }) =>
    <div className="col-xs-12 col-sm-9 details">
        <DetailsNav />
        {pageView === 'projects' && <Projects />}
        {pageView === 'collabs' && <Collaborations />}
        {pageView === 'followers' && <Followers />}
    </div>;

function mapStateToProps({ profile }) {
    return { pageView: profile.pageView };
}

export default connect(mapStateToProps)(Details);
