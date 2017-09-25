import React from 'react';

const DetailsNav = ({ toggleView, projectsCount, friendsCount }) =>
    <div className="details_nav">
        <p
            onClick={() => {
                toggleView('projects');
            }}
        >
            Projects {projectsCount}
        </p>
        <p
            onClick={() => {
                toggleView('friends');
            }}
        >
            Friends {friendsCount}
        </p>
    </div>;

export default DetailsNav;
