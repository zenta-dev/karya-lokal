type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  createdAt: string;
  updatedAt: string;
};
export default function Product({ product }: { product: Product }) {
  return (
    <div className="w-[290.33px] h-[371.22px] static">
      <div
        className="text-[#000000] text-left absolute left-[567px] top-[1871px] w-[145px] h-[27px]"
        style={{ font: "400 18px 'Berkshire Swash', sans-serif" }}
      >
        {product.name}
      </div>
      <div
        className="text-[#000000] text-center absolute left-[596px] top-[1919px] w-[84px] h-[15px] flex items-center justify-center"
        style={{ font: "700 16px 'Poppins', sans-serif" }}
      >
        ${product.price}
      </div>
    </div>
  );
}
