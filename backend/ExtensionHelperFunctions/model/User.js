const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    breakTime: {
        type: Boolean,
    },
    
    tasks:[{
        name: String,
        expectedTime: Number,
        actualTime: Number,
        required: true
    }],

    blockedCategories: [{
        type: String,
        count: Number,
        required: true
    }],
 
});

module.exports = mongoose.model('User', userSchema)