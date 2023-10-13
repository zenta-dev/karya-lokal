"use client";
import { Category, Image } from "database";
import { useState } from "react";
import { DeleteProduct } from "./DeleteProduct";
import ImageCard from "./ImageCard";

export type ProductType = {
  id: string;
  name: string;
  description: string;
  stock: number;
  price: number;
  categoryId: string;
  images: Image[];
  category: Category;
};

export default function ProductCard({ product }: { product: ProductType }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="p-4 bg-grey shadow-md rounded-md">
      <ImageCard images={product.images} />
      <div className="pt-4">
        <h3 className="text-lg font-medium">{product.name}</h3>
        <p className="text-xl font-bold mt-2">Rp. {product.price}</p>
        <p className="  mt-2">Category: {product.category.name}</p>
        <p className="text-sm text-gray-500 mt-2">{product.description}</p>
        <p className="text-sm text-gray-500 mt-2">Stock: {product.stock}</p>
        <DeleteProduct id={product.id} />
      </div>
    </div>
  );
}
