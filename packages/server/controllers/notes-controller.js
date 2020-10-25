const createHttpError = require('http-errors');
const { Note } = require('../models');

exports.createNote = async (req, res, next) => {
  try {
    const {
      body,
      tokenPayload: { userId },
    } = req;
    const noteInstance = await Note.create({
      ...body,
      userId,
    });
    res.status(201).send({
      data: noteInstance,
    });
  } catch (err) {
    next(err);
  }
};

exports.getNotes = async (req, res, next) => {
  try {
    const {
      tokenPayload: { userId },
    } = req;
    const notes = await Note.findAll({
      order: [['createdAt', 'DESC']],
      where: {
        userId,
      },
    });
    res.send({
      data: notes,
    });
  } catch (err) {
    next(err);
  }
};

exports.getNoteById = async (req, res, next) => {
  try {
    const {
      tokenPayload: { userId },
      params: { noteId },
    } = req;
    const noteInstance = await Note.findOne({
      where: {
        id: noteId,
        userId,
      },
    });
    if (noteInstance) {
      res.send({
        data: noteInstance,
      });
      return;
    }
    next(createHttpError(404));
  } catch (err) {
    next(err);
  }
};

exports.updateNoteById = async (req, res, next) => {
  try {
    const {
      body,
      tokenPayload: { userId },
      params: { noteId },
    } = req;
    const [, [updatedNoteInstance]] = await Note.update(body, {
      where: {
        id: noteId,
        userId,
      },
      returning: true,
    });
    if (updatedNoteInstance) {
      res.send({
        data: updatedNoteInstance,
      });
      return;
    }
    next(createHttpError(404));
  } catch (err) {
    next(err);
  }
};

exports.removeNoteById = async (req, res, next) => {
  try {
    const {
      tokenPayload: { userId },
      params: { noteId },
    } = req;
    const deletedRowCount = await Note.destroy({
      where: {
        id: noteId,
        userId,
      },
    });
    if (deletedRowCount) {
      res.send({
        data: { id: noteId },
      });
      return;
    }
    next(createHttpError(404));
  } catch (err) {
    next(err);
  }
};
