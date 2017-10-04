const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema(
    {
        userId: { type: String, default: '' },
        userImg: { type: String, default: '' },
        content: { type: String, default: '' },
        audio: { type: String, default: '' },
        workspaceId: { type: String, default: '' }
    },
    { timestamps: { createdAt: 'created_at' } }
);

mongoose.model('comments', commentSchema);
