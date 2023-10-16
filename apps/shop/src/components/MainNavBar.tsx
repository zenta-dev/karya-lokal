"use client";
import { cn } from "@/lib/utils";
import { Category } from "@karya-lokal/database";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    async function getCategories() {
      const { data } = await axios.get("/api/categories");
      setCategories(data);
    }
    getCategories();
  }, [categories]);
  const routes = [
    {
      href: `/categories`,
      label: "Categories",
      active: pathname === `/categories`,
    },
    {
      href: `/products`,
      label: "Products",
      active: pathname === `/products`,
    },
    {
      href: `/discounts`,
      label: "Discounts",
      active: pathname === `/orders`,
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-4", className)}
      {...props}
    >
      <Link href="/">
        <div className="flex items-center">
          <Image
            src="/assets/images/logo/karya-lokal.png"
            alt="KaryaLokal"
            width={50}
            height={50}
          />
          <h1 className="text-xl font-semibold ml-4">KaryaLokal</h1>
        </div>
      </Link>
      {routes.map((route, index) => {
        if (index === 0) {
          return (
            <DropdownMenu key={index}>
              <DropdownMenuTrigger asChild>
                <button
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    route.active
                      ? "text-black dark:text-white"
                      : "text-muted-foreground"
                  )}
                >
                  Categories
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {categories.map((category) => {
                  return (
                    <DropdownMenuItem key={category.id}>
                      <Link
                        href={`/categories/${category.id}`}
                        className="text-sm"
                      >
                        {category.name}
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          );
        } else {
          return (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                route.active
                  ? "text-black dark:text-white"
                  : "text-muted-foreground"
              )}
            >
              {route.label}
            </Link>
          );
        }
      })}
    </nav>
  );
}
