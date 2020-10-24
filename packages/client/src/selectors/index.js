import { createSelector } from 'reselect';

export const authSelector = createSelector((state) => {
  console.log(state);
  return state.auth;
});
export const notesSelector = createSelector((state) => state.notes);
