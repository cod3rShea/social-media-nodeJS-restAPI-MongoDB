const router = require("express").Router();

router.get("/", (req, res) => {
	res.send("test auth route");
});

module.exports = router;
