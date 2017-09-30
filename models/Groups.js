const mongoose = require('mongoose');
const { Schema } = mongoose;

const groupSchema = new Schema(
    {
        owner: { type: String, default: '' },
        name: { type: String, default: '' },
        img: { type: String, default: '' }
    },
    { timestamps: { createdAt: 'created_at' } }
);

mongoose.model('groups', groupSchema);
