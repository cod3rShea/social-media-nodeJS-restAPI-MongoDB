const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//Register
router.post("/register", async (req, res) => {
	try {
		// encyrpt password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(req.body.password, salt);

		//create new user
		const newUser = await new User({
			username: req.body.username,
			email: req.body.email,
			password: hashedPassword,
		});

		//save user and return response
		const user = await newUser.save();
		res.status(200).json(user);
	} catch (error) {
		console.log("is this my error", error);
	}
});

module.exports = router;
