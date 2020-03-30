const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
name: String,
size: Number,
key: String,
url: String,
profile: {
  type: Buffer,
},
createdAt : {
    type: Date,
    default: Date.now(),
},
});


const Post = mongoose.model("Post" , PostSchema)

module.exports = Post;















