import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import { connect } from 'react-redux';
import * as actions from '../../../../actions';

class ProjectList extends Component {
    componentDidMount() {
        const { userId } = this.props.profile;
        this.props.fetchProjects(userId);
    }
    render() {
        const { projects } = this.props;
        return (
            <ul className="list">
                {projects.map((p, i) => {
                    return <ProjectItem key={i} project={p} />;
                })}
            </ul>
        );
    }
}

function mapStateToProps({ profile, projects }) {
    return { profile, projects };
}
export default connect(mapStateToProps, {
    fetchProjects: actions.projectsActions.fetchProjects
})(ProjectList);
