import { prisma } from "./prisma.client";

async function main() {
  const productcount = await prisma.product.count();
  if (productcount === 0) {
    await prisma.product.createMany({
      data: [
        {
          name: "Product1",
          createdAt: new Date(),
          description: "New Product",
          price: 100,
        },
        {
          name: "Product2",
          createdAt: new Date(),
          description: "New Product 2",
          price: 200,
        },
        {
          name: "Product3",
          createdAt: new Date(),
          description: "New Product 3",
          price: 300,
        },
      ],
    });
  }
}

main();
