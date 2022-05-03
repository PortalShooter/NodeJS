const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    username: {
        type: 'string',
        required: true,
    },
    password: {
        type: 'string',
        required: true,
    },
  
});

module.exports = model('User', userSchema);