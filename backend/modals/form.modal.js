const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String
    },
    checkboxes: {
        type: [String]
    },
    message: {
        type: String
    }
}, {
    timestamps: true
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
