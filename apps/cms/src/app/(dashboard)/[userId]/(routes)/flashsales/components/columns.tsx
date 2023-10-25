"use client";

import { ColumnDef } from "@tanstack/react-table";

import { StoreProduct } from "@karya-lokal/database";
import { CellAction } from "./cell-action";

export type FlashSaleColumn = {
  id?: string;
  name: string;
  description: string;
  percent: number;
  startDate: string | Date | null;
  endDate: string | Date | null;
  products: StoreProduct[];
  storeName: string | null;
  createdAt: string | Date | null;
};

export const columns: ColumnDef<FlashSaleColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "percent",
    header: "Percent",
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
  },
  {
    accessorKey: "endDate",
    header: "End Date",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
