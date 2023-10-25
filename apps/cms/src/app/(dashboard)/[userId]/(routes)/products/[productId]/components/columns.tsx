"use client";

import { Input } from "@/components/ui/input";

export type ColumnParams = {
  header1: string;
  header2: string;
  onChange: (value: { id: string; value: string; type: string }) => void;
};

export const columns = ({ header1, header2, onChange }: ColumnParams) => [
  {
    accessorKey: "name",
    header: header1,
    cell: ({ row }: any) => (
      <div className="flex flex-col">
        <div className="flex flex-row items-center space-x-2">
          <p>{row.original.name}</p>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "values",
    header: header2,
    cell: ({ row }: any) => (
      <div>
        <div>
          {row.original.values.map((value: any) => {
            return <p key={value.id}>{value.id}</p>;
          })}
        </div>
      </div>
    ),
  },
  {
    accessorKey: "stock",
    header: "Stock",
    cell: ({ row }: any) => (
      <div>
        {row.original.stock.map((value: any) => {
          const uniqueId = `${row.original.rowIndex}`;
          return (
            <Input
              key={value.id}
              defaultValue={value.stock}
              onChange={(e) =>
                onChange({
                  id: value.id,
                  value: e.target.value,
                  type: "stock",
                })
              }
            />
          );
        })}
      </div>
    ),
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }: any) => (
      <div>
        {row.original.price.map((value: any) => (
          <Input
            key={value.id}
            type="number"
            defaultValue={value.price}
            onChange={(e) =>
              onChange({
                id: value.id,
                value: e.target.value,
                type: "price",
              })
            }
          />
        ))}
      </div>
    ),
  },
];
