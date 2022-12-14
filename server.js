const isProd = process.env.NODE_ENV === "production";

export const server = isProd ? "" : "http://localhost:3000";
