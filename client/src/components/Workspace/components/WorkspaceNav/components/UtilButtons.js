import React from 'react';
// Tools
import { withRouter } from 'react-router-dom';
// Components
import { Glyphicon } from 'react-bootstrap';

const loggedInLinks = [
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

const UtilButtons = ({ history }) => {
    const pathname = history.location.pathname.split('/');
    const isLoggedIn = pathname.indexOf('new') === -1 && pathname.length > 2;

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

export default withRouter(UtilButtons);
