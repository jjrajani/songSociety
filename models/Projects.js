const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema(
    {
        user: String,
        name: String,
        paid: Boolean,
        currentAudio: String /* List of User ID's comment audio is promoted */,
        renditions: [String] /* List of Audio Ids when audio is promoted */,
        colaborators: [String],
        latestProject: String /* Update when new project is created/saved*/
    },
    { timestamps: { createdAt: 'created_at' } }
);

mongoose.model('projects', projectSchema);
