const express = require("express");
const router = express.Router();
const sistem_controller = require("../controllers/sistem.controller");

const isAuth = require('../util/is-Auth');
const canCreate = require('../util/canCreateSistem');
const canView = require('../util/canViewSistem');

// Manda a llamar los controllers
router.get("/", isAuth, canView, sistem_controller.get_sistem);

router.get("/add", isAuth, canCreate, sistem_controller.get_sistem_add);

router.post("/add", isAuth, canCreate, sistem_controller.post_sistem_add);

router.get("/list", isAuth, canView, sistem_controller.get_sistem_list);

router.get("/:sistem", isAuth, sistem_controller.get_sistem_id);

module.exports = router;
