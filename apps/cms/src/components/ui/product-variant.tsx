"use client";

import { Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { FormLabel } from "./form";
import { Input } from "./input";
import { Separator } from "./separator";

interface ProductsVariantProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: any[];
}

const ProductsVariant: React.FC<ProductsVariantProps> = ({
  disabled,
  onChange,
  onRemove,
  value,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  if (Array.isArray(value)) {
    console.error("Expected value to be an array but received:", value);
  }

  return (
    <div>
      {value.map((item, index) => (
        <>
          <div key={index} className=" grid grid-cols-2 gap-4">
            <div>
              <FormLabel>Variant {index + 1}</FormLabel>
              <Input
                key={item.id}
                value={item.name}
                onChange={(e) => onChange(e.target.value)}
                disabled={disabled}
                className="w-full my-4"
              />
            </div>
            <br />
            {item.values.map((value: any, index: number) => (
              <div key={index} className="flex flex-row items-center space-x-2">
                <FormLabel>
                  Option {item.name} {index + 1}
                </FormLabel>
                <Input
                  key={value.id}
                  value={value.name}
                  onChange={(e) => onChange(e.target.value)}
                  disabled={disabled}
                />
                <button disabled={disabled} onClick={() => {}} type="button">
                  <Trash className="h-4 w-4" />
                </button>
              </div>
            ))}
            <br />
          </div>
          {index !== value.length - 1 && <Separator className="my-8" />}
        </>
      ))}
    </div>
  );
};

export default ProductsVariant;
