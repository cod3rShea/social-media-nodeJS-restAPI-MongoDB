const router = require("express").Router();

router.get("/", (req, res) => {
	res.send("test user route");
});

module.exports = router;
