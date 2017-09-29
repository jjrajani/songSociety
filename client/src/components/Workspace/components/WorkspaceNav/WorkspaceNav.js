import React from 'react';
// Components
import TitleInput from './components/TitleInput';
import UtilButtons from './components/UtilButtons';

const WorkspaceNav = () =>
    <div className="workspace_nav">
        <div className="container">
            <div className="workspace_utils_wrapper">
                <TitleInput />
                <UtilButtons />
            </div>
        </div>
    </div>;

export default WorkspaceNav;
