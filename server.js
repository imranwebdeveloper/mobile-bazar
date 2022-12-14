const isProd = process.env.NODE_ENV === "production";
// MONGODB_URI=mongodb://localhost:27017/mobileSell
export const server = isProd ? "" : "http://localhost:3000";
