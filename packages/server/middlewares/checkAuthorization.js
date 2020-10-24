const createHttpError = require('http-errors');
const jwt = require('jsonwebtoken');
const util = require('util');
const { accessTokenSecret } = require('../config');

const verify = util.promisify(jwt.verify);

async function checkAuthorization(req, res, next) {
  try {
    const authorizationHeader = req.get('Authorization');
    const [, accessToken] = authorizationHeader.slit(' ');

    const tokenPayload = await verify(accessToken, accessTokenSecret);

    req.tokenPayload = tokenPayload;

    next();
  } catch (err) {
    next(createHttpError(419));
  }
}

module.exports = checkAuthorization;
