const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema(
    {
        receiver: {
            type: String,
            required: true
        },
        sender: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: [true, 'Message cannot be blank']
        },
        status: {
            type: String,
            trim: true,
            enum: ['sent', 'read'],
            default: 'sent'
        }
    },
    {
        timestamps: true
    }
);

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
