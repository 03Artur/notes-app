import createReducer from './helpers/createReducer';

const initialState = {
  notes: [],
  selectedIndex: -1,
  error: null,
  isFetching: false,
};

const handlers = {};

const notesReducer = createReducer(initialState, handlers);

export default notesReducer;
