import React from 'react';
// HOC
import withClickEvent from '../hoc/withClickEvent';
// Tools
import { connect } from 'react-redux';

const TitleInput = ({ workspace }) => {
    const { name } = workspace.project;
    return workspace.editTitleMode
        ? <div className="title_wrapper">
              <input
                  id="title_input"
                  className="title_input"
                  name="title_input"
                  placeholder="Untitled"
                  value={name}
                  onFocus={e => {
                      // to move cursor to end
                      e.target.value = '';
                      e.target.value = name;
                  }}
                  onChange={() => console.log('title input change')}
              />
          </div>
        : <div className="title_wrapper">
              <p htmlFor="title_input" className="workspace_title">
                  {name}
              </p>
          </div>;
};

function mapStateToProps({ workspace }) {
    return { workspace };
}

export default connect(mapStateToProps)(withClickEvent(TitleInput));
