import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { getAllProduct } from "@/lib/products";
import Link from "next/link";

export default async function Dashboard() {
  const productsData: Promise<Product[]> = getAllProduct();
  const products = await productsData; 
  return (
    <div>
      <div className="flex justify-between  ">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link href="/dashboard/product/new">
          <Button className="bg-blue-500 hover:bg-blue-600">Tambah</Button>
        </Link>
      </div>
      <div className="container mx-auto  ">
        <div className="grid grid-cols-2 gap-24 p-2 m-2">
          {products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
