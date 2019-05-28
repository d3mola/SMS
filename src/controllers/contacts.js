const { Contact, Message } = require('../models');
const helper = require('../helper');

class ContactController {
    static async createContact(req, res) {
        try {
            const { name, phone } = req.body;
            if (Number.isNaN(Number(phone))) {
                return res.status(400).json({
                    success: false,
                    message: 'Phone numebr is invalid',
                });
            }

            const exisitingContact = await Contact.find({ phone });
            if (exisitingContact.length) {
                return res.status(409).json({
                    success: false,
                    message: 'Contact already exits',
                });
            }
            

            const newContact = await Contact.create({ name, phone });

            return res.status(201).json({
                success: true,
                message: 'Contact created',
                data: newContact
            });
        } catch (error) {
            helper.handleError(error, res);
        }
    }

    static async getContacts(req, res) {
        try {
            const docs = await Contact.find();

            return res.status(200).json({
                success: true,
                message: 'Contacts retrived',
                data: docs
            });
        } catch (error) {
            helper.handleError(error, res);
        }
    }

    static async getContact(req, res) {
        try {
            const query = { _id: req.params.id };
            const doc = await Contact.find(query);

            if (doc.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'Contact not found',
                });
            }

            return res.status(200).json({
                success: true,
                message: 'Contact retrived',
                data: doc[0]
            });
        } catch (error) {
            helper.handleError(error, res);
        }
    }

    static async updateContact(req, res) {
        try {
            const query = { _id: req.params.id };
            const { name, phone } = req.body;

            if (Number.isNaN(Number(phone))) {
                return res.status(400).json({
                    success: false,
                    message: 'Phone numebr is invalid',
                });
            }

            const doc = await Contact.findByIdAndUpdate(query, { name, phone });
            console.log({ doc });

            return res.status(200).json({
                success: true,
                message: 'Contact updated',
                data: {
                    name: doc.name,
                    phone: doc.phone
                }
            });
        } catch (error) {
            helper.handleError(error, res);
        }
    }

    static async deleteContact(req, res) {
        try {
            const query = { _id: req.params.id };
            const doc = await Contact.findByIdAndRemove(query);
            await Message.deleteMany({ sender: doc.phone });
            await Message.deleteMany({ receiver: doc.phone });

            console.log({ doc });

            return res.status(200).json({
                success: true,
                message: 'Contact deleted',
            });
        } catch (error) {
            helper.handleError(error, res);
        }
    }
}

module.exports = ContactController;
