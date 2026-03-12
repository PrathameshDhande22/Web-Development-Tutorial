import { addProduct } from "@/actions/product";
import Form from "next/form"

const AddProductPage = async () => {
  return (
    <main className="mx-auto max-w-xl p-6">
      <div className="rounded-lg border border-slate-300 bg-white p-6 shadow-sm">
        <h1 className="mb-6 text-2xl font-semibold text-slate-900">
          Add Product
        </h1>

        {/* using the Action in the Form */}
        <Form action={addProduct} className="space-y-4">
          <div>
            <label
              htmlFor="productname"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              Product Name
            </label>
            <input
              id="productname"
              name="productname"
              type="text"
              required
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-500"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              Product Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-500"
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              Product Price
            </label>
            <input
              id="price"
              name="price"
              type="number"
              min="0"
              required
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-500"
            />
          </div>

          <button
            type="submit"
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white"
          >
            Add Product
          </button>
        </Form>
      </div>
    </main>
  );
};

export default AddProductPage;
