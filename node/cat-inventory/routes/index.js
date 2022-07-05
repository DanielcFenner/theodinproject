var express = require("express");
var router = express.Router();

// Require controllers
const catController = require("../controllers/catController");
const categoryController = require("../controllers/categoryController");

/* GET home page. */
router.get("/", catController.index);

router.get("/cat/:id", catController.catDetail);

router.get("/cat/add", catController.addCat);

router.get("/category/:id", categoryController.categoryDetail);

router.get("/category/add", categoryController.addCategory);

module.exports = router;
