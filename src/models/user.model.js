const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    first_name: {
        type: String,
        required: true
    },

    last_name: {
        type: String,
     //   required: true
    },

    email: {
        type: String,
        required: true,
        index: true,
        unique: true
    },

    password: {
        type: String,
    //    required: true
    },

    cart:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'carts',
    },

    age: {
        type: Number,
    //    required: true
    },

    role: {
        type: String,
        enum: ['admin', 'usuario'],
        default: 'usuario'
    }
})

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;