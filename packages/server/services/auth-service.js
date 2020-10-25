const _ = require('lodash');
const jwt = require('jsonwebtoken');
const util = require('util');
const { v4: uuidV4 } = require('uuid');
const addMilliseconds = require('date-fns/addMilliseconds');
const { refreshTokenExpiresIn, accessTokenSecret, accessTokenExpiresIn } = require('../config');

const signJWT = util.promisify(jwt.sign);

async function issueTokenPair(payload) {
  return {
    accessToken: await signJWT(payload, accessTokenSecret, {
      expiresIn: accessTokenExpiresIn,
    }),
    refreshToken: {
      token: uuidV4(),
      expirationTime: addMilliseconds(new Date(), refreshTokenExpiresIn),
    },
  };
}

function prepareUser(userInstance) {
  const userValues = userInstance.get();
  return _.omit(userValues, ['password']);
}

exports.createSession = async (userInstance) => {
  const accessTokenPayload = {
    userId: userInstance.get('id'),
  };

  const { accessToken, refreshToken } = await issueTokenPair(accessTokenPayload);

  const refreshTokenInstance = await userInstance.createRefreshToken(refreshToken);
  return {
    user: prepareUser(userInstance),
    tokenPair: {
      accessToken,
      refreshToken: refreshTokenInstance.get('token'),
    },
  };
};
