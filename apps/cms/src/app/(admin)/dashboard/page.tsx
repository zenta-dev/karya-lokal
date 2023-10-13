import { getAllProduct } from "@/actions/products";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Dashboard() {
  const products = await getAllProduct();
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Link href="/dashboard/new">
          <Button className="bg-blue-500 hover:bg-blue-600">Tambah</Button>
        </Link>
      </div>
      <div className="grid grid-rows-4 gap-4 grid-flow-row">
        <ul>
          {products.map((product: any) => (
            <li key={product.id}>
              <ProductCard key={product.id} product={product} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
