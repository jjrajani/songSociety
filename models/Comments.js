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

// 59cd93c6734d1d341d3e0a65 Fragrant Disposition
// "created_at": {
//         "$date": "2017-03-21T15:00:01.171Z"
//     }

// Bacon ipsum dolor amet meatball picanha kevin pastrami biltong. Landjaeger chicken pork belly alcatra strip steak ham hock.

// 456 Jessica Briggs / flourescent_flowers
// 789 Frank Delaware / jigsaws_hickshaw
// 12343 Jackson Rivers / jacksons_garage
// 012 Melanie Polouski / flavoured_icecream
// google-oauth2|112112280522876375272 / Jenna Rajani / jjrajani

mongoose.model('comments', commentSchema);
