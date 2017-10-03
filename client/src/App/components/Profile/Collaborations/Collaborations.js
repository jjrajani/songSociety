import React from 'react';
import CollaborationsList from './components/CollaborationsList';
import { Link } from 'react-router-dom';

const Collaborations = () => {
    return (
        <div className="projects">
            <div className="header">
                <h3>Collaborations</h3>
            </div>
            <CollaborationsList />
        </div>
    );
};

export default Collaborations;
