const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema(
    {
        userId: String,
        content: String,
        audio: String
    },
    { timestamps: { createdAt: 'created_at' } }
);

mongoose.model('comments', commentSchema);
