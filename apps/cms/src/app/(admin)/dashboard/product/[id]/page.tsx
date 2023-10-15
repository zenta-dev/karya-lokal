"use client";
import { getProductById } from "@/lib/products";
import { useEffect, useState } from "react";
interface IProduct {
  id: string;
}
export default function ProductPage({ params }: { params: IProduct }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProduct = async () => {
      console.log("fetching product" + params.id);
      const product = await getProductById(params.id);
      setProduct(product);
      setLoading(false);
    };
    fetchProduct();
  }, [params.id]);

  if (!product) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.stock}</p>
    </div>
  );
}
