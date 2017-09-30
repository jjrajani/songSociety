const mongoose = require('mongoose');
const { Schema } = mongoose;

const followerSchema = new Schema({
    name: { type: String, default: '' },
    latestProject: { type: String, default: '' },
    relations: { type: [String], default: [] }
});

mongoose.model('followers', followerSchema);
