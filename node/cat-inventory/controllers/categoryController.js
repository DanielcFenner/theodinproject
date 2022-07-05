const Category = require("../models/category");
const Cat = require("../models/cat");
const async = require("async");
const { body, validationResult } = require("express-validator");

exports.categoryDetail = function (req, res) {
  async.parallel(
    {
      category: function (callback) {
        Category.findById(req.params.id).exec(callback);
      },

      categoryCats: function (callback) {
        Cat.find({ category: req.params.id })
          .populate("category")
          .exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      if (results.category == null) {
        // No results.
        var err = new Error("Genre not found");
        err.status = 404;
        return next(err);
      }
      // Successful, so render
      res.render("category_detail", {
        title: results.category.name + " Category Details",
        category: results.category,
        categoryCats: results.categoryCats,
      });
    }
  );
};

exports.addCategory = function (req, res) {
  res.render("category_add", {
    title: "Add new category",
  });
};

exports.addCategoryPost = [
  body("name", "Name must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),

  (req, res, next) => {
    const errors = validationResult(req);

    let category = new Category({
      name: req.body.name,
    });

    if (!errors.isEmpty()) {
      console.log("oops");
      return;
    } else {
      category.save(function (err) {
        if (err) {
          return next(err);
        }

        res.redirect(category.url);
      });
    }
  },
];

exports.deleteCategory = function (req, res) {
  Category.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      res.send("Failed to delete");
    }

    res.redirect("/");
  });
};
