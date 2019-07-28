import { combineReducers } from "redux";

import { reducer as form } from "redux-form";

import users from "../containers/Users/reducer";

export default combineReducers({
  form,
  users
});
