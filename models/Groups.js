const mongoose = require('mongoose');
const { Schema } = mongoose;

const groupSchema = new Schema(
    {
        owner: String,
        name: String,
        img: String
    },
    { timestamps: { createdAt: 'created_at' } }
);

mongoose.model('groups', groupSchema);
