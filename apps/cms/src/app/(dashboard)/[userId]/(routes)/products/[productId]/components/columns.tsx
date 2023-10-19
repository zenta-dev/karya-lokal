"use client";
export type Variant = {
  name: string;
  price: number;
  stock: number;
};
export type ProductColumn = {
  name: string;
  values: Variant[];
};

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columnsa: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Warna",
  },
  {
    accessorKey: "values",
    header: "Ukuran",
    cell: ({ row }) => (
      <div className="flex flex-col gap-y-2">
        {row.original.values.map((item) => (
          <div className="flex gap-x-2" key={item.name}>
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    ),
  },
];

export const dummyData: ProductColumn[] = [
  {
    name: "Merah",
    values: [
      {
        name: "L",
        price: 1000,
        stock: 10,
      },
      {
        name: "XL",
        price: 2000,
        stock: 20,
      },
    ],
  },
  {
    name: "Biru",
    values: [
      {
        name: "Variant 1",
        price: 1000,
        stock: 10,
      },
      {
        name: "Variant 2",
        price: 2000,
        stock: 20,
      },
      {
        name: "Variant 2",
        price: 2000,
        stock: 20,
      },
    ],
  },
];
