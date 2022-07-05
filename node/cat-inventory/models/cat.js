const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let CatSchema = new Schema({
  name: { type: String },
  stock: { type: Number },
  category: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  description: { type: String },
  pic: { type: String },
});

CatSchema.virtual("url").get(function () {
  return "/cat/" + this._id;
});

//Export Cat
module.exports = mongoose.model("Cat", CatSchema);
