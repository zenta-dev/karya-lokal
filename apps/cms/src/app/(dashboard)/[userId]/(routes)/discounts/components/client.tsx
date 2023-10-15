"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { DiscountColumn, columns } from "./columns";

interface DiscountsClientProps {
  data: DiscountColumn[];
}

export const DiscountsClient: React.FC<DiscountsClientProps> = ({ data }) => {
  const [rowSelection, setRowSelection] = useState({});
  const params = useParams();
  const router = useRouter();
  console.log("CLIENT DATA", data);
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Discounts (${data.length})`}
          description="Manage discounts for your store"
        />
        <Button onClick={() => router.push(`/${params.userId}/discounts/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable
        searchKey="name"
        columns={columns}
        data={data}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
      />
    </>
  );
};
