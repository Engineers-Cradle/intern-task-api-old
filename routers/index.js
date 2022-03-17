const express = require("express");
const router = express.Router();

router.use("/api/ft", require("./frontend"));
router.use("/api/be", require("./backend"));

module.exports = router;
