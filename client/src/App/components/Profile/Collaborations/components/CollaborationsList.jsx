import React from 'react';
import CollabItem from './CollabItem';
import { connect } from 'react-redux';

const CollaborationsList = ({ profile, projects }) =>
    <ul className="list">
        {projects.collabs.map((p, i) => {
            return <CollabItem key={i} project={p} />;
        })}
    </ul>;

function mapStateToProps({ profile, projects }) {
    return { profile, projects };
}
export default connect(mapStateToProps)(CollaborationsList);
