import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { SurveyList } from '../';

const Dashboard = ({ auth }) => {
    return auth
        ? <div>
              <h5
                  style={{ margin: '30px' }}
                  className="center-align teal-text"
              >{`${auth.username}'s Surveys`}</h5>
              <SurveyList />
              <div className="fixed-action-btn">
                  <Link
                      to="/surveys/new"
                      className="btn-floating btn-large red"
                  >
                      <i className="material-icons">add</i>
                  </Link>
              </div>
          </div>
        : null;
};

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Dashboard);
