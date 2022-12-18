import connectDB from "../../../middleware/connectDB";
import Category from "../../../modal/category";

const handler = async (req, res) => {
  try {
    const category = await Category.find({});
    return res.json({
      status: true,
      message: "Success",
      category: category[0].brands,
    });
  } catch (error) {
    return res.send(error.message);
  }
};

export default connectDB(handler);
