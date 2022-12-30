import connectDB from "../../../middleware/connectDB";
import User from "../../../modal/userAuth";

const handler = async (req, res) => {
  try {
    if (req.method === "POST") {
      const { name, email, password } = req.body;
      const isUser = await User.findOne({ email: email });

      if (isUser) {
        return res.json({
          status: false,
          message: "Email already registration",
        });
      }
      const role = "user";

      const readyState = new User({ name, email, password, role });

      const user = await readyState.save();
      res.json({ status: true, message: "Registration success", user });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB(handler);
