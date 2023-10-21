"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Category, ProductImage, ProductVariant } from "@karya-lokal/database";
import { CellAction } from "./cell-action";

export type ProductColumn = {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  price: number;
  images: ProductImage[];
  discountId: string | null;
  userCartId: string | null;
  category: Category;
  variant: ProductVariant[];
  createdAt: Date | null;
};

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },

  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "category",
    header: "Category",
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
