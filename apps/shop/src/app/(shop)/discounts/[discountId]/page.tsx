import CarouselImage from "@/components/common/CarouselImage";
import { ProductImage, prisma } from "@karya-lokal/database";

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  let product = null;
  if (params.productId !== "new") {
    product = await prisma.product.findUnique({
      where: {
        id: params.productId,
      },
      include: {
        images: true,
      },
    });
  }

  const images: ProductImage[] = product?.images || [];

  const categories = await prisma.category.findMany();

  const variants = await prisma.productVariant.findMany();

  return (
    <div className="flex">
      <div className="flex ">
        <CarouselImage images={images} height="500px" width="500px" />
        <h1 className="text-2xl font-bold"> {product?.name}</h1>
        <p className="text-lg "> {product?.description}</p>
        <p className="text-lg "> {product?.price}</p>
        <p className="text-lg "> {product?.stock}</p>

        <div>
          <h1 className="text-2xl font-bold">Category</h1>
          <ul>
            {categories.map((category) => (
              <li key={category.id}>{category.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="text-2xl font-bold">Variant</h1>
          <ul>
            {variants.map((variant) => (
              <li key={variant.id}>{variant.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
