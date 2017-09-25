const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
    user: String,
    name: String,
    renditions: Number,
    colaborators: Number
});

mongoose.model('projects', projectSchema);
