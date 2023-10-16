import { Product, prisma } from "@karya-lokal/database";

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  let product: Product[] = [];
  if (params.productId !== "new") {
    product = await prisma.product.findMany({});
  }

  // const images: ProductImage[] = product?.images || [];

  const categories = await prisma.category.findMany();

  const variants = await prisma.productVariant.findMany();

  return (
    <div>
      <h1>asd</h1>
    </div>
  );
};

export default ProductPage;
