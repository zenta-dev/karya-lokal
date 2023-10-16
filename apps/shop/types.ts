export type Product = ({
  images: {
    id: string;
    url: string;
    name: string | null;
    productId: string | null;
    productVariantId: string | null;
  }[];
  variants: {
    id: string;
    name: string;
    size: string;
    color: string;
    price: number;
    stock: number;
    productId: string;
  }[];
} & {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: string;
  userId: string | null;
  createdAt: Date;
  updatedAt: Date;
  discountId: string | null;
});

export interface Image {
  id: string;
  url: string;
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}
