import { prisma } from "@karya-lokal/database";

import { CategoriesClient } from "./components/client";
import { CategoryColumn } from "./components/columns";

const CategoriesPage = async ({ params }: { params: { userId: string } }) => {
  const categories = await prisma.category.findMany({});
  

  const formattedCategories: CategoryColumn[] = categories.map((item) => ({
    id: item.id,
    name: item.name,
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoriesClient data={formattedCategories} />
      </div>
    </div>
  );
};

export default CategoriesPage;
