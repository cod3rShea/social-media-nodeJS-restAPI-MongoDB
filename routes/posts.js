const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//create a post
router.post("/", async (req, res) => {
	const newPost = new Post(req.body);
	try {
		const savedPost = await newPost.save();
		res.status(200).json(savedPost);
	} catch (err) {
		res.status(500).json(err);
	}
});
module.exports = router;

//update post
router.put("/:id", async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (post.userId === req.body.userId) {
			await post.updateOne({ $set: req.body });
			res.status(403).json("your post has been updated");
		} else {
			res.status(403).json("you can only update your own post");
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

//update post
router.delete("/:id", async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (post.userId === req.body.userId) {
			await post.deleteOne();
			res.status(403).json("your post has been deleted");
		} else {
			res.status(403).json("you can only delete your own post");
		}
	} catch (err) {
		res.status(500).json(err);
	}
});
