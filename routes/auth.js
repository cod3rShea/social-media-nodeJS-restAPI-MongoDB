const router = require("express").Router();
const User = require("../models/User");

//Register
router.get("/register", async (req, res) => {
	try {
		const user = await new User({
			username: "Mike",
			email: "test@test.com",
			password: "123456",
		});

		await user.save();
		res.send("okay");
	} catch (error) {
		console.log("is this my error", error);
	}
});

module.exports = router;
