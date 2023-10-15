type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: string;
  images: {
    id: string;
    url: string;
    name: string | null;
    productId: string | null;
  }[];
  category: {
    id: string;
    name: string;
  };
};

type Category = {
  id: string;
  name: string;
};
