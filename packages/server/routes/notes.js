const notesRouter = require("express").Router({ mergeParams: true });
const NotesController = require("../controllers/notes-controller");

notesRouter
  .route("/")
  .post(NotesController.createNote)
  .get(NotesController.getNotes);

notesRouter
  .route("/:nodeId")
  .get(NotesController.getNoteById)
  .patch(NotesController.updateNoteById)
  .delete(NotesController.removeNoteById);

module.exports = notesRouter;
