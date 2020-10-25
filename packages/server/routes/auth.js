const authRouter = require('express').Router();
const validateBody = require('../middlewares/validateBody');
const AuthController = require('../controllers/auth-controller');
const { loginSchema, signUpSchema } = require('../validation');

authRouter.post('/login', validateBody(loginSchema), AuthController.loginUser);
authRouter.post('/signup', validateBody(signUpSchema), AuthController.signUpUser);
authRouter.post('/refresh', AuthController.refreshAuth);

module.exports = authRouter;
