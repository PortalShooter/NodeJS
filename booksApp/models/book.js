const {Schema, model} = require('mongoose');

const bookSchema = new Schema({
    id: {
        type: 'string',
        required: true,
    },
    title: {
        type: 'string',
        required: true,
    },
    description: {
        type: 'string',
        default: '',
    },
    authors: {
        type: 'string',
        required: true,
    },
    favorite: {
        type: 'string',
        default: '',
    },
    fileCover: {
        type: 'string',
        default: '',
    },
    fileName: {
        type: 'string',
        default: '',
    },
});

module.exports = model('Book', bookSchema);