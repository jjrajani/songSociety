import t from './types';
import * as db from '../db';
import _ from 'lodash';

export const fetchGroups = userId => dispatch => {
    const groups = _.values(db.GROUPS);

    dispatch({ type: t.FETCH_GROUPS, payload: groups });
};
