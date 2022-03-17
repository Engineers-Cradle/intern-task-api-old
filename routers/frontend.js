const { Router } = require("express");
const controller = require("../controllers/frontend.js");
const { auth } = require("../middlewares/auth");

const router = Router();

router.post("/task1/add", controller.addData);

router.get("/task2/view/:secret", auth, controller.viewData);

router.get("/task3/layout", controller.layout);
router.get("/task3/layout/logo", controller.logo);

module.exports = router;
