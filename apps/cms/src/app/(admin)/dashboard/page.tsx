"use client";
import { Button } from "@/components/ui/button";

const DashboardPage = () => {
  const addProduct = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("add product");
  };
  return (
    <div>
      <Button type="submit" onClick={addProduct}>
        Add Product
      </Button>
    </div>
  );
};
export default DashboardPage;
