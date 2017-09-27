const mongoose = require('mongoose');
const { Schema } = mongoose;

const friendSchema = new Schema({
    name: String,
    latestProject: String,
    relations: [String]
});

mongoose.model('friends', friendSchema);
