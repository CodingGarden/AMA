import { prismaClient } from "~~/lib/prismaClient";

export default defineEventHandler(async (event) => {
  const items = await prismaClient.item.findMany();
  return { items };
})