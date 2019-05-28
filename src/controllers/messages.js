const { Message, Contact } = require('../models');

class MessageController {
    static async sendMessage(req, res) {
        try {
            const { message, sender, receiver } = req.body;
            
            if (sender === receiver) {
                return res.status(400).json({
                    success: false,
                    message: 'You cannot send a message to yourself'
                });
            }

            const contacts = await Contact.find().or([{ phone: sender }, { phone: receiver }]);

            if (contacts.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'Sender and receiver doen\'t exist'
                });
            }

            if (contacts.length < 2) {
                return res.status(404).json({
                    success: false,
                    message: 'Sender or receiver doen\'t exist'
                });
            }
            

            const newMessage = await Message.create({ message, sender, receiver });

            return res.status(201).json({
                success: true,
                message: 'Message sent',
                data: newMessage,
            });
        } catch (error) {
            helper.handleError(error, res);
        }
    }

    static async readMessage(req, res) {
        try {
            const query = { _id: req.params.id };
            const message = await Message.find(query);

            const updatedStatus = await Message.findByIdAndUpdate(query, {
                status: 'read'
            });
            
            message.status = updatedStatus;

            return res.status(200).json({
                success: true,
                message: 'Messages read',
                data: message[0]
            });
        } catch (error) {
            helper.handleError(error, res);
        }
    }
}

module.exports = MessageController;
