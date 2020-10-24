exports.createNote = async (req, res, next) => {
  try {
    const {
      body,
      params: { userId },
    } = req;
  } catch (err) {
    next(err);
  }
};

exports.getNotes = async (req, res, next) => {
  try {
    const {
      body,
      params: { userId },
    } = req;
  } catch (err) {
    next(err);
  }
};

exports.getNoteById = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;
  } catch (err) {
    next(err);
  }
};

exports.updateNoteById = async (req, res, next) => {
  try {
    const {
      body,
      params: { userId },
    } = req;
  } catch (err) {
    next(err);
  }
};

exports.removeNoteById = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;
  } catch (err) {
    next(err);
  }
};
