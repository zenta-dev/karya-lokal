// pages/products/[id].tsx

import { prisma } from "@/prisma/cli";
import { GetServerSideProps } from 'next';

interface ProductPageProps {
  id: string;
  name: string;
  description: string;
  price: number;
}

const DetailProduct = ({ id, name, description, price }: ProductPageProps) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{name}</h1>
      <p className="mb-4">{description}</p>
      <p className="text-lg font-semibold">{`$${price.toFixed(2)}`}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;

  const product = await prisma.product.findUnique({ where: { id: Number(id) } });

  if (!product) {
    return {
      notFound: true,
    };
  }

  // IMPORTANT: Close the Prisma connection
  await prisma.$disconnect();

  return {
    props: {
      id: product.id.toString(),
      name: product.name,
      description: product.description,
      price: product.price,
    },
  };
};

export default DetailProduct;
