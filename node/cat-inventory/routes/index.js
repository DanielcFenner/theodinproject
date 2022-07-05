var express = require("express");
var router = express.Router();

// Require controllers
const catController = require("../controllers/catController");
const categoryController = require("../controllers/categoryController");

/* GET home page. */
router.get("/", catController.index);

router.get("/cat/add", catController.addCat);

router.post("/cat/add", catController.addCatPost);

router.get("/cat/:id", catController.catDetail);

router.post("/cat/:id/delete", catController.deleteCat);

router.get("/category/add", categoryController.addCategory);

router.post("/category/add", categoryController.addCategoryPost);

router.get("/category/:id", categoryController.categoryDetail);

router.post(
  "/category/:id/delete",
  categoryController.deleteCategory
);

module.exports = router;
