"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Category, ProductImage, ProductVariant } from "@karya-lokal/database";
import { CellAction } from "./cell-action";

export type ProductColumn = {
  id?: string;
  name: string;
  description: string;
  categoryId: string;
  price: number;
  images: ProductImage[];
  flashSaleId: string | null;
  // userCartId: string | null;
  category?: Category | null;
  variant: ProductVariant[];
  createdAt: any;
};

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => <span>{row.original.category?.name}</span>,
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
