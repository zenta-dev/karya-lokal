"use client";
import AddCategory from "@/components/categories/AddCategory";
import { Category } from "database";
import { useEffect, useState } from "react";
export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  const res = useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();
        console.log(data);
        setCategories(data.category);
        if (data.category.length > 0) {
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);
  res;
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1>Categories</h1>
        <AddCategory
          onClick={() => {
            res;
          }}
        />
      </div>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {categories.map((category) => (
              <li key={category.id}>{category.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
