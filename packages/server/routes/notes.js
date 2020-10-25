const notesRouter = require('express').Router({ mergeParams: true });
const NotesController = require('../controllers/notes-controller');
const validateBody = require('../middlewares/validateBody');
const { createNoteSchema, updateNoteSchema } = require('../validation');

notesRouter
  .route('/')
  .post(validateBody(createNoteSchema), NotesController.createNote)
  .get(NotesController.getNotes);

notesRouter
  .route('/:noteId')
  .get(NotesController.getNoteById)
  .patch(validateBody(updateNoteSchema), NotesController.updateNoteById)
  .delete(NotesController.removeNoteById);

module.exports = notesRouter;
