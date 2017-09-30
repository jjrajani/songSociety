const mongoose = require('mongoose');
const { Schema } = mongoose;

const audioSchema = new Schema(
    {
        userId: { type: String, default: '' },
        s3Name: { type: String, default: '' },
        title: { type: String, default: '' },
        img: String,
        commentId: { type: String, default: '' }
    },
    { timestamps: { createdAt: 'created_at' } }
);

mongoose.model('audios', audioSchema);
