const createHttpError = require('http-errors');
const AuthService = require('../services/auth-service');

const { User, RefreshToken } = require('../models');

exports.loginUser = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;

    const userInstance = await User.findOne({
      where: {
        email,
      },
    });
    if (userInstance && (await userInstance.comparePassword(password))) {
      const data = await AuthService.createSession(userInstance);

      res.send({
        data,
      });

      return;
    }

    next(createHttpError(403, 'Incorrect email or password'));
  } catch (err) {
    next(err);
  }
};

exports.signUpUser = async (req, res, next) => {
  const { body } = req;
  try {
    const userInstance = await User.create(body);
    if (userInstance) {
      const data = await AuthService.createSession(userInstance);

      res.send({
        data,
      });

      return;
    }
    next(createHttpError(401));
  } catch (err) {
    next(err);
  }
};

exports.refreshAuth = async (req, res, next) => {
  try {
    const {
      body: { refreshToken },
    } = req;

    const refreshTokenInstance = await RefreshToken.findOne({
      where: {
        token: refreshToken,
      },
    });
    if (refreshTokenInstance && refreshTokenInstance.notExpired()) {
      const userInstance = await refreshTokenInstance.getUser();
      if (userInstance) {
        const data = await AuthService.createSession(userInstance);

        res.send({
          data,
        });

        return;
      }
    }

    next(createHttpError(401));
  } catch (err) {
    next(err);
  }
};
