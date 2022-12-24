const router = require("express").Router();
const Post = require("../model/post_model");

//get all the post
router.get("/", async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

//create a new post

router.post("/new", async (req, res) => {
  const newPost = new Post(req.body);

  try {
    const savePost = await newPost.save();
    res.status(200).json(savePost);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
