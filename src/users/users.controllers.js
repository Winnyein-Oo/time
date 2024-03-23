import * as services from "./users.services.js";

export const getAll = async (req, res) => {
  const data = services.getAll();
  return res.status(200).json({ data: data });
};
