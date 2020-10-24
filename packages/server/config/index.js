const ms = require('ms');
const database = require('./database');

module.exports = {
  database,
  saltRounds: 10,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET || 'ACCESS-TOKEN-SECRET-KEY',
  accessTokenExpiresIn: ms('30m'),
  refreshTokenExpiresIn: ms('20 days'),
};
