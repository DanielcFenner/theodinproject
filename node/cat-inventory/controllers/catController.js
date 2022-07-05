const Cat = require("../models/cat");
const Category = require("../models/category");

const async = require("async");
const { body, validationResult } = require("express-validator");

// exports.index = function (req, res) {
//   Cat.find()
//     .populate("category")
//     .exec(function (err, catList) {
//       if (err) {
//         return next(err);
//       }
//       res.render("index", {
//         title: "Cats",
//         catList,
//       });
//     });
// };

exports.index = function (req, res) {
  async.parallel(
    {
      catList: function (callback) {
        Cat.find().populate("category").exec(callback);
      },
      categories: function (callback) {
        Category.find().exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      res.render("index", {
        title: "Cats",
        catList: results.catList,
        categories: results.categories,
      });
    }
  );
};

exports.catDetail = function (req, res) {
  Cat.findById(req.params.id)
    .populate("category")
    .exec(function (err, cat) {
      if (err) {
        return next(err);
      }
      res.render("catdetail", {
        title: cat.name + " details",
        cat,
      });
    });
};

exports.addCat = function (req, res) {
  Category.find({}, function (err, categories) {
    if (err) {
      return next(err);
    }

    res.render("cat_add", {
      title: "Add a new cat",
      categories,
    });
  });
};

// Handle Genre create on POST.
exports.addCatPost = [
  (req, res, next) => {
    if (!(req.body.category instanceof Array)) {
      if (typeof req.body.category === "undefined")
        req.body.category = [];
      else req.body.category = new Array(req.body.category);
    }
    next();
  },

  body("name", "Name must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("stock", "Stock must not be empty.").escape(),
  body("description", "Description must not be empty")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("pic", "pic must not be empty").escape(),
  body("category.*").escape(),

  (req, res, next) => {
    const errors = validationResult(req);

    let cat = new Cat({
      name: req.body.name,
      stock: req.body.stock,
      description: req.body.description,
      pic: req.body.pic,
      category: req.body.category,
    });

    if (!errors.isEmpty()) {
      console.log("oops");
      return;
    } else {
      cat.save(function (err) {
        if (err) {
          return next(err);
        }

        res.redirect(cat.url);
      });
    }
  },
];

exports.deleteCat = function (req, res) {
  Cat.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      res.send("Failed to delete");
    }

    res.redirect("/");
  });
};
