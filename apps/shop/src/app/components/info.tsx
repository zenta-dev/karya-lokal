"use client";

import { CartButton } from "./ui/cart-button";
import Currency from "./ui/currency";

interface InfoProps {
  data: any;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6"></div>
      <div className="mt-10 flex items-center gap-x-3">
        <CartButton productId={data.id} />
      </div>
    </div>
  );
};

export default Info;
