import axios from 'axios';
import t from './types';

/*
  fetchUser uses ReduxThunk, a middleware that determines if action creator is returning a funciton.
  In so it is able to hold off calling dispatch until fetchUser says to.
 */
export const fetchUser = () => {
  return function(dispatch) {
    axios
      .get('/api/current_user')
      .then(res => dispatch({ type: t.FETCH_USER, payload: res }));
  };
};
