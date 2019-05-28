const express = require('express');
const ContactController = require('../controllers/contacts');


const contacts = express.Router();

// TODO: add middleware to routers

contacts.post('/', ContactController.createContact);

contacts.get('/', ContactController.getContacts);

contacts.get('/:id', ContactController.getContact);

contacts.put('/:id', ContactController.updateContact);

contacts.delete('/:id', ContactController.deleteContact);

module.exports = contacts;
