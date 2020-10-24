const authRouter = require("express").Router();
const AuthController = require("../controllers/auth-controller");

authRouter.post("/login", AuthController.loginUser);
authRouter.post("/signup", AuthController.signUpUser);
authRouter.post("/refresh", AuthController.refreshAuth);

module.exports = authRouter;
