export type Products = {
  title: string,
  stock: number,
  price: number,
  category: string,
  description: string,
  image: string
};

export const data: Products[] = [
  {
    title: "Essence Mascara Lash Princess",
    description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.",
    category: "beauty",
    price: 9.99,
    stock: 5,
    image: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
  },
  {
    title: "Eyeshadow Palette with Mirror",
    description: "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks.",
    category: "beauty",
    price: 19.99,
    stock: 44,
    image: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
  },
  {
    title: "Powder Canister",
    description: "The Powder Canister is a finely milled setting powder designed to set makeup and control shine.",
    category: "beauty",
    price: 14.99,
    stock: 59,
    image: "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"
  },
  {
    title: "Red Lipstick",
    description: "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips.",
    category: "beauty",
    price: 12.99,
    stock: 68,
    image: "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png"
  },
  {
    title: "Red Nail Polish",
    description: "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails.",
    category: "beauty",
    price: 8.99,
    stock: 71,
    image: "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png"
  },
  {
    title: "Calvin Klein CK One",
    description: "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent.",
    category: "fragrances",
    price: 49.99,
    stock: 17,
    image: "https://cdn.dummyjson.com/products/images/fragrances/CK%20One/1.png"
  }
];
