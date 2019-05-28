const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, 'Name is required']
        },
        phone: {
            type: String,
            trim: true,
            min: 11,
            unique: true,
            required: [true, 'Phone number is required']
        }
    },
    {
        timestamps: true
    }
);

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
