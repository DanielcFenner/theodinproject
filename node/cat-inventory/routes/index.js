var express = require("express");
var router = express.Router();

// Require controllers
const catController = require("../controllers/catController");

/* GET home page. */
router.get("/", catController.index);

module.exports = router;
