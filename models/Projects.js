const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
    user: String,
    name: String,
    renditions: Number,
    // change renditions to store promoted song ids
    // display length as 'renditions' on the front
    colaborators: Number

    // add paid bool
});

mongoose.model('projects', projectSchema);
