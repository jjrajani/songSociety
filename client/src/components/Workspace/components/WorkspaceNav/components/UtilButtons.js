import React from 'react';
// Tools
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// Components
import { Glyphicon } from 'react-bootstrap';

const UtilButtons = ({ history, auth, isChanged }) => {
    const isLoggedIn = auth.isAuthenticated();
    return (
        <div className="util_buttons_wrapper">
            {isLoggedIn &&
                <button
                    type="submit"
                    form="title_input_form"
                    className={isChanged ? 'highlight' : ''}
                >
                    {isChanged === true && <span>Save changes</span>}
                    <Glyphicon title="Save Track" glyph="cloud-upload" />
                </button>}
            {isLoggedIn &&
                <Glyphicon title="Download Track" glyph="download-alt" />}
        </div>
    );
};

function mapStateToProps({ auth, workspace }) {
    return { auth, isChanged: workspace.isTouched };
}

export default connect(mapStateToProps)(withRouter(UtilButtons));
