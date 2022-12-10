import { mobiles } from "../../data/mobiles";

export default function handler(req, res) {
  console.log(req.path);
  res.status(200).json(mobiles);
}
