import { prisma } from "database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const products = await prisma.product.findMany();
    res.json(products);
  } else {
    res.status(405).end();
  }
}
