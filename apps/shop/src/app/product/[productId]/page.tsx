// pages/products/[id].tsx

import Gallery from "@/app/components/gallery";
import Info from "@/app/components/info";
import { getProduct } from "@/lib/products/get-product";

// interface ProductPageProps {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
// }

interface ProductPageProps {
  params: {
    productId: string;
  };
}
const DetailProduct: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const images: any = product?.images?.map((image, index) => ({
    id: index,
    url: image.url,
  }));
  console.log(product);
  return (
    <div className="mx-auto max-w-7xl">
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <Gallery images={images} />
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <Info data={product} />
          </div>
        </div>
        <hr className="my-10" />
      </div>
    </div>
  );
};

// export async function getServerSideProps(context: {
//   params: { productId: string };
// }) {
//   const { productId } = context.params;

//   // Simulate fetching product details from an API or database
//   const getProductDetails = async (productId: string) => {
//     // Replace this with an actual API or database call to fetch product details
//     // In this example, we are simulating product details
//     const response = await fetch(`/api/products/${productId}`);
//     if (response.ok) {
//       const product = await response.json();
//       return product;
//     } else {
//       // Handle the case where the product is not found
//       return null;
//     }
//   };

//   const product = await getProductDetails(productId);

//   return {
//     props: {
//       product,
//     },
//   };
// }

export default DetailProduct;
