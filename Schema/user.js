const mongoose = require('mongoose')

module.exports = mongoose.model('user',
    {
        name: String,
        email: String,
        password: String,
        adress: String,
        phoneNumber: Number,
        cardNumber: Number,
        expDate: Date,
        billZipCode: Number,
        cvv: String
    })