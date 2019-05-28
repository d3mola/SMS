const express = require('express');

const contacts = require('./contacts');
const messages = require('./messages');

const routes = express();

routes.use('/contacts', contacts);
routes.use('/messages', messages);

module.exports = routes;
