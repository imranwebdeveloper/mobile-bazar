import connectDB from "../../../middleware/connectDB";
import Category from "../../../modal/category";

const handler = async (req, res) => {
  try {
    const category = await Category.find({});
    return res.status(200).json({ status: true, message: "Success", category });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export default connectDB(handler);
