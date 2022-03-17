const { Router } = require("express");
const controller = require("../controllers/backend.js");
const { auth } = require("../middlewares/auth");

const router = Router();

// router.post("/task1/add", auth, controller.addData);

// router.get("/task2/view", auth, controller.viewData);

// router.get("/task3/footer", controller.footer);

module.exports = router;
