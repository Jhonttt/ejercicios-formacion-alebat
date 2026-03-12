export interface Product {
  id: number;
  image?: string;
  title?: string;
  description?: string;
  price?: number;
}
export interface Series {
  id: number;
  category: string;
  title: string;
  episode: number;
  video?: string;
}

export const mockProducts: Product[] = [
  {
    id: 1,
    image: "/products/producto1.jpeg",
    title: "Producto 1",
    description: "Descripción del producto 1",
    price: 19.99,
  },
  {
    id: 2,
    image: "/products/producto2.jpeg",
    title: "Producto 2",
    description: "Descripción del producto 2",
    price: 29.99,
  },
  {
    id: 3,
    image: "/products/producto3.jpeg",
    title: "Producto 3",
    description: "Descripción del producto 3",
    price: 39.99,
  },
  {
    id: 4,
    image: "/products/producto1.jpeg",
    title: "Producto 1",
    description: "Descripción del producto 1",
    price: 19.99,
  },
  {
    id: 5,
    image: "/products/producto2.jpeg",
    title: "Producto 2",
    description: "Descripción del producto 2",
    price: 29.99,
  },
  {
    id: 6,
    image: "/products/producto3.jpeg",
    title: "Producto 3",
    description: "Descripción del producto 3",
    price: 39.99,
  },
  {
    id: 7,
    image: "/products/producto1.jpeg",
    title: "Producto 1",
    description: "Descripción del producto 1",
    price: 19.99,
  },
  {
    id: 8,
    image: "/products/producto2.jpeg",
    title: "Producto 2",
    description: "Descripción del producto 2",
    price: 29.99,
  },
  {
    id: 9,
    image: "/products/producto3.jpeg",
    title: "Producto 3",
    description: "Descripción del producto 3",
    price: 39.99,
  },
];

export const mockSeries: Series[] = [
  {
    id: 1,
    category: "aventuras",
    title: "spiderman",
    episode: 1,
    video: "https://www.youtube.com/watch?v=pKS6zndTbH0",
  },
  {
    id: 2,
    category: "aventuras",
    title: "spiderman",
    episode: 2,
    video: "https://www.youtube.com/watch?v=pKS6zndTbH0",
  },
  {
    id: 3,
    category: "aventuras",
    title: "spiderman",
    episode: 3,
    video: "https://www.youtube.com/watch?v=pKS6zndTbH0",
  },
  {
    id: 4,
    category: "miedo",
    title: "el conjuro",
    episode: 1,
    video: "https://www.youtube.com/watch?v=pKS6zndTbH0",
  },
  {
    id: 5,
    category: "miedo",
    title: "el conjuro",
    episode: 2,
    video: "https://www.youtube.com/watch?v=pKS6zndTbH0",
  },
  {
    id: 6,
    category: "miedo",
    title: "el conjuro",
    episode: 3,
    video: "https://www.youtube.com/watch?v=pKS6zndTbH0",
  },
];
