import prisma from "../prisma.js";

export const getAll = async () => {
  return prisma.user.findMany();
};
