const router = require('express').Router();
const checkAuthorization = require('./middlewares/checkAuthorization');
const authRouter = require('./routes/auth');
const notesRouter = require('./routes/notes');

router.use('/auth', authRouter);

router.use(checkAuthorization);

router.use('/users/:userId/notes', notesRouter);

module.exports = router;
