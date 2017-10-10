import React from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../../actions';

const tabs = [
    { text: 'Active', route: 'active' },
    { text: 'Invite', route: 'invite' },
    { text: 'Pending', route: 'pending' }
];

const CollaboratorsNav = ({ activeTab, togglePageView }) =>
    <div className="collaborators details_nav col-xs-12">
        {tabs.map(t => {
            return (
                <p
                    key={t.route}
                    className={activeTab === t.route ? 'active' : 'inactive'}
                    onClick={() => {
                        togglePageView(t.route);
                    }}
                >
                    {t.text}
                </p>
            );
        })}
    </div>;

function mapStateToProps({ collaborators }) {
    return { activeTab: collaborators.pageView };
}

export default connect(mapStateToProps, {
    togglePageView: actions.collaboratorsActions.togglePageView
})(CollaboratorsNav);
