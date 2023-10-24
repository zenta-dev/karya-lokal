"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { FlashSaleColumn, columns } from "./columns";

interface FlashSaleClientProps {
  data: FlashSaleColumn[];
}

export const FlashSaleClient: React.FC<FlashSaleClientProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();
  console.log(data);
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`FlashSales (${data.length})`}
          description="Manage FlashSale for your store"
        />
        <Button onClick={() => router.push(`/${params.userId}/flashsales/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};
