const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema(
    {
        user: { type: String, default: '' },
        name: { type: String, default: '' },
        paid: { type: Boolean, default: false },
        currentAudio: {
            type: String,
            default: ''
        } /* List of User ID's comment audio is promoted */,
        renditions: {
            type: [String],
            default: []
        } /* List of Audio Ids when audio is promoted */,
        collaborators: { type: [String], default: [] },
        latestProject: {
            type: String,
            default: ''
        } /* Update when new project is created/saved*/,
        isPrivate: { type: Boolean, default: false },
        comments: { type: [String], default: [] } /* _id's of comment object*/
    },
    { timestamps: { createdAt: 'created_at' } }
);

mongoose.model('projects', projectSchema);
