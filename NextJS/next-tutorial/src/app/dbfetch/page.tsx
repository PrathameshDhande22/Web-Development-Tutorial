import { deleteProduct } from "@/actions/product";
import { prisma } from "@/prisma.client";
import Form from "next/form";
import Link from "next/link";

const DBFetch = async () => {
  // Accessing the DB prisma client on the server side page only
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="mx-auto max-w-5xl p-6">
      {products.length === 0 ? (
        <div className="rounded-lg border border-slate-300 p-6 text-center">
          <p className="text-base font-medium text-slate-800">
            No products found
          </p>
        </div>
      ) : (
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            return (
              <article
                key={product.id}
                className="rounded-lg border border-slate-300 bg-white p-4 shadow-sm"
              >
                <div className="space-y-3">
                  <h2 className="text-lg font-semibold text-slate-900">
                    {product.name}
                  </h2>
                  <p className="text-sm text-slate-600">
                    {product.description?.trim() || "No description available."}
                  </p>
                  <p className="text-sm font-medium text-slate-800">
                    Price: ${product.price.toLocaleString("en-US")}
                  </p>
                  <time
                    className="block text-xs text-slate-500"
                    dateTime={product.createdAt.toISOString()}
                  >
                    {new Intl.DateTimeFormat("en-US", {
                      dateStyle: "medium",
                    }).format(product.createdAt)}
                  </time>
                </div>
                <Form action={deleteProduct.bind(null, product.id)}>
                  <button
                    type="submit"
                    className="mt-2 cursor-pointer rounded-2xl bg-red-400 p-2 px-4"
                  >
                    Delete
                  </button>
                </Form>
              </article>
            );
          })}
        </section>
      )}
      <div className="mt-3 flex w-full justify-center">
        <Link href="/dbfetch/add" className="bg-blue-500 p-2 text-white">
          Add Product
        </Link>
      </div>
    </div>
  );
};

export default DBFetch;
