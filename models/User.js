const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    authId: String

    // add paid bool

    // name - init from google, be able to edit
    // desciption
    // img
    // email
    // website / portfolio

    // facebook
    // twitter
});

mongoose.model('users', userSchema);
