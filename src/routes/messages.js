const express = require('express');
const MessageController = require('../controllers/messages');


const messages = express.Router();

messages.post('/', MessageController.sendMessage);

messages.get('/:id', MessageController.readMessage);

module.exports = messages;
