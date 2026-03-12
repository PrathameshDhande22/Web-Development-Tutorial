// Denoting these as the server action
import { prisma } from "@/prisma.client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Simple Server Action
export async function addProduct(formdata: FormData) {
  "use server";
  const productname = formdata.get("productname");
  const productdesc = formdata.get("description");
  const price = formdata.get("price");

  const createdResult = await prisma.product.create({
    data: {
      name: String(productname?.toString()),
      price: parseInt(String(price?.toString())) ?? 0,
      description: String(productdesc),
    },
    select: {
      id: true,
    },
  });

  console.log("Created Result => ", createdResult);
  redirect("/dbfetch");
}

// delete server action with othe rparamters
export async function deleteProduct(id: number) {
  "use server";

  const deleteResult = await prisma.product.delete({
    where: {
      id: id,
    },
  });

  console.log("Product Deleted =>", deleteResult);
  revalidatePath("/dbfetch", "page");
}
