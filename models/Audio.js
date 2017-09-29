const mongoose = require('mongoose');
const { Schema } = mongoose;

const audioSchema = new Schema(
    {
        userId: String,
        s3Name: String,
        title: String,
        img: String,
        commentId: String
    },
    { timestamps: { createdAt: 'created_at' } }
);

mongoose.model('audios', audioSchema);
