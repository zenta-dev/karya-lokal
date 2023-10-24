import React from 'react';

const DetailProduct = ({ product }: { product: any }) => {
  if (!product) {
    return (
      <div className="max-w-lg mx-auto p-4">
        <h1 className="text-lg mb-5 font-bold text-center">Product Details</h1>
        <div className="bg-yellow-300 p-4 rounded-md">
          <p>Product not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-lg mb-5 font-bold text-center">Product Details</h1>
      <div className="bg-yellow-300 p-4 rounded-md">
        <>
          <h2 className="text-xl font-semibold mb-3">{product.name}</h2>
          <p>{product.description}</p>
        </>
      </div>
    </div>
  );
};

export async function getServerSideProps(context: { params: { productId: string; }; }) {
  const { productId } = context.params;

  // Simulate fetching product details from an API or database
  const getProductDetails = async (productId: string) => {
    // Replace this with an actual API or database call to fetch product details
    // In this example, we are simulating product details
    const response = await fetch(`/api/products/${productId}`);
    if (response.ok) {
      const product = await response.json();
      return product;
    } else {
      // Handle the case where the product is not found
      return null;
    }
  };

  const product = await getProductDetails(productId);

  return {
    props: {
      product,
    },
  };
}

export default DetailProduct;
