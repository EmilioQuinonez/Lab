const express = require("express");
const router = express.Router();
const sistem_controller = require("../controllers/sistem.controller");

// Manda a llamar los controllers
router.get("/", sistem_controller.get_sistem);

router.get("/add", sistem_controller.get_sistem_add);

router.post("/add", sistem_controller.post_sistem_add);

router.get("/list", sistem_controller.get_sistem_list);

router.get("/:sistem", sistem_controller.get_sistem_id);

module.exports = router;
