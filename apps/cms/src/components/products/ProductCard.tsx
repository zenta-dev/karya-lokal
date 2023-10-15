import { cn } from "@/lib/utils";
import { Category, Image } from "database";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import ImageCard from "./ImageCard";
import { DeleteProduct } from "./buttons/DeleteProduct";
import { EditProduct } from "./buttons/EditProduct";

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
  return (
    <Card
      className={cn(
        " w-screen max-w-xl flex flex-col p-4 bg-grey shadow-md rounded-md h-full"
      )}
    >
      <CardHeader>
        <ImageCard images={product.images} />
      </CardHeader>
      <CardContent>
        <CardTitle className={cn("text-xl font-bold mt-4 truncate w-full")}>
          {product.name}
        </CardTitle>
        <CardDescription className={cn("mt-4 truncate")}>
          {product.description}
        </CardDescription>
        <p className={cn("truncate text-xl font-bold mt-2")}>
          Rp. {product.price}
        </p>
        <p className="mt-2 truncate">Category: {product.category.name}</p>
        <p className="text-sm text-gray-500 mt-2 truncate">
          Stock: {product.stock}
        </p>
      </CardContent>
      <CardFooter className={cn("mt-auto flex space-x-2")}>
        <DeleteProduct id={product.id} /> <EditProduct id={product.id} />
      </CardFooter>
    </Card>
  );
}
