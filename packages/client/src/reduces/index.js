import { combineReducers } from 'redux';
import authReducer from './authReducer';
import notesReducer from './notesReducer';

const reducer = combineReducers({
  auth: authReducer,
  notes: notesReducer,
});

export default reducer;
