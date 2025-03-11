const express = require('express');
const router = express.Router();
const error_controller = require('../controllers/error.controller');

router.get("*", error_controller.get_error);

module.exports = router;