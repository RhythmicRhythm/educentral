const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    userimage: {
        type: String,
        required: [true, "Please add a photo"],
        default: "https://www.businessbecause.com/uploads/default/news/images/1611746171.png",
      },
    image: {
      type: String,
      required: [true, "Please add a photo"],
      default: "https://www.businessbecause.com/uploads/default/news/images/1611746171.png",
    },
   
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
