const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const router = require('./routes');
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const redis = require('redis');

const client = redis.createClient();

require('dotenv').config();

app.use(compression());
app.use(morgan('dev'));
app.use(cors());
app.use('/products', router);

module.exports = {
  app: app,
  client: client
};
