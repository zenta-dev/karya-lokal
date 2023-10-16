// "use client";

// import { useStoreModal } from "@/hooks/use-store-modal";
// import { useEffect } from "react";

// const SetupPage = () => {
//   const onOpen = useStoreModal((state) => state.onOpen);
//   const isOpen = useStoreModal((state) => state.isOpen);

//   useEffect(() => {
//     if (!isOpen) {
//       onOpen();
//     }
//   }, [isOpen, onOpen]);

//   return null;
// };

// export default SetupPage;
import { HeroProducts } from "@/components/product/hero";
import { prisma } from "database";
export default async function HomePage() {
  // find product by order count
  const highProductOrder = await prisma.product.findMany({
    take: 3,
    include: {
      images: true,
      category: true,
    },
    orderBy: {
      orderItems: {
        _count: "desc",
      },
    },
  });
  return (
    <div>
      <HeroProducts data={highProductOrder} />
    </div>
  );
}
