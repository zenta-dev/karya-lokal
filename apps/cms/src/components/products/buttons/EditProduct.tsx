"use client";
import { useRouter } from "next/navigation";
import { Button } from "../../ui/button"; 
export const EditProduct = ({ id }: { id: string }) => {
  const router = useRouter();
  return (
    <Button
      className="bg-yellow-500 hover:bg-yellow-600"
      onClick={() => router.push(`/dashboard/product/${id}`)}
    >
      Edit
    </Button>
  );
};
