import { combineEpics } from 'redux-observable';

import { users } from '../containers/Users/epic';

export default combineEpics(users);
