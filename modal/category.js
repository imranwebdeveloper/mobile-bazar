import mongoose from "mongoose";
const category = new mongoose.Schema({
  brands: [String],
});

const Category =
  mongoose.models.Categories || mongoose.model("Categories", category);

export default Category;
