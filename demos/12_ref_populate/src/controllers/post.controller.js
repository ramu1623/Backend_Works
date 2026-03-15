const User = require("../models/user.model");
const Post = require("../models/post.model");

exports.createPost = async (req, res) => {

  try {

    const user = await User.create({
      name: "Ramu",
      email: "ramu@gmail.com"
    });

    const post = await Post.create({
      title: "Learning Mongoose",
      content: "Relationships example",
      author: user._id
    });

    res.json(post);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getPosts = async (req, res) => {

  try {

    const posts = await Post.find().populate("author");

    res.json(posts);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }

};