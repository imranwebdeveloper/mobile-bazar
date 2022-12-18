import mongoose from "mongoose";

const connectDB = (handler) => (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  mongoose.set("strictQuery", true);
  mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  return handler(req, res);
};

export default connectDB;
