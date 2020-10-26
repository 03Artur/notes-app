import { createSelector } from 'reselect';

export const authSelector = (state) => state.auth;

export const notesSelector = (state) => state.notes;

export const userSelector = createSelector(
  authSelector,
  (auth) => auth.user,
);

export const currentNoteSelector = createSelector(
  notesSelector,
  ({ notes, currentIndex }) => notes[currentIndex],
);
