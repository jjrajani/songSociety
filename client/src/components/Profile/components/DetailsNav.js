import React from 'react';

const DetailsNav = ({ toggleView, activeTab, projectsCount, friendsCount }) =>
    <div className="details_nav">
        <p
            className={activeTab === 'projects' ? 'active' : 'inactive'}
            onClick={() => {
                toggleView('projects');
            }}
        >
            Projects <span className="count">{projectsCount}</span>
        </p>
        <p
            className={activeTab === 'friends' ? 'active' : 'inactive'}
            onClick={() => {
                toggleView('friends');
            }}
        >
            Friends <span className="count">{friendsCount}</span>
        </p>
    </div>;

export default DetailsNav;
