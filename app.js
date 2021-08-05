const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

const app = express();

dotenv.config({ path: './config/config.env'});

app.use(morgan('dev'));

const PORT = process.env.PORT || 9000;

app.use(require('./src/route/index'));

module.exports = app;