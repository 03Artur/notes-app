const validateBody = (validationSchema) => async (req, res, next) => {
  const { body } = req;
  try {
    req.body = await validationSchema.validate(body);
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = validateBody;
