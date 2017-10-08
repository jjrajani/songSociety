import React from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../../actions';
import { withRouter } from 'react-router-dom';
// Components
import { Link } from 'react-router-dom';
import { Glyphicon } from 'react-bootstrap';
// add on click to take you to project workspace

const ProjectItem = ({ project, toggleActiveTab, history }) => {
    const isArtistRoute = history.location.pathname.split('/')[1] === 'artist';
    const isPrivate = project.isPrivate;
    return isArtistRoute && isPrivate
        ? <li className="list_item no_link">
              <h5 className="title">
                  <i className="fa fa-lock" />
                  <Glyphicon glyph="music" />
                  {project.name}
              </h5>
              <p>
                  <span className="label">Renditions:</span>
                  {project.renditions.length}
                  <span className="label">Collaborators:</span>
                  {project.collaborators.length}
              </p>
          </li>
        : <Link
              onClick={() => {
                  toggleActiveTab(`/workspace/${project._id}`);
              }}
              to={`/workspace/${project._id}`}
          >
              <li className="list_item">
                  <h5 className="title">
                      <Glyphicon glyph="music" />
                      {project.name}
                  </h5>
                  <p>
                      <span className="label">Renditions:</span>
                      {project.renditions.length}
                      <span className="label">Collaborators:</span>
                      {project.collaborators.length}
                  </p>
              </li>
          </Link>;
};

export default connect(null, {
    toggleActiveTab: actions.navActions.toggleActiveTab
})(withRouter(ProjectItem));
