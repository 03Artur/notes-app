const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');
const router = require('./router.js');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', router);

app.use((err, req, res, next) => {
  res.status(err?.status ?? 500).send({
    error: err,
  });
});

module.exports = app;
