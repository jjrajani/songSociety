import React from 'react';
// Tools
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// Components
import { Glyphicon } from 'react-bootstrap';

const loggedInLinks = [
    {
        title: 'Save Track',
        glyph: 'cloud-upload'
    },
    {
        title: 'Download Track',
        glyph: 'download-alt'
    }
    // ,
    // {
    //     title: 'Delete Workspace',
    //     glyph: 'trash'
    // }
];

const UtilButtons = ({ history, auth }) => {
    const isLoggedIn = auth.isAuthenticated();

    return (
        <div className="util_buttons_wrapper">
            {!isLoggedIn && <Glyphicon title="Record New Track" glyph="cd" />}

            {isLoggedIn &&
                loggedInLinks.map((l, i) => {
                    return (
                        <Glyphicon key={i} title={l.title} glyph={l.glyph} />
                    );
                })}
        </div>
    );
};

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(withRouter(UtilButtons));
