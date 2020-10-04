const mongoose = require('mongoose');

const PintySchema = new mongoose.Schema({
    type:{
        type: String,
        enum: ['Point'],
        require: true,
    },
    coordinates: {
        type: [Number],
        require: true,
    }
})


module.exports = PintySchema;