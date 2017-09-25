const mongoose = require('mongoose');
const { Schema } = mongoose;

const groupSchema = new Schema({
    owner: String,
    name: String,
    img: String
});

mongoose.model('groups', groupSchema);
