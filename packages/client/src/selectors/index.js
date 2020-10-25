import { createSelector } from 'reselect';

export const authSelector = (state) => {
  return state.auth;
};
export const notesSelector = (state) => state.notes;

export const currentNoteSelector = createSelector(
  notesSelector,
  ({ notes, currentIndex }) => notes[currentIndex],
);
