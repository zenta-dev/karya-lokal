"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.userId}`,
      label: "Overview",
      active: pathname === `/${params.userId}`,
    },
    {
      href: `/${params.userId}/categories`,
      label: "Categories",
      active: pathname === `/${params.userId}/categories`,
    },
    {
      href: `/${params.userId}/products`,
      label: "Products",
      active: pathname === `/${params.userId}/products`,
    },
    {
      href: `/${params.userId}/orders`,
      label: "Orders",
      active: pathname === `/${params.userId}/orders`,
    },
    {
      href: `/${params.userId}/discounts`,
      label: "Discounts",
      active: pathname === `/${params.userId}/orders`,
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {routes.map((route) => (
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
      ))}
    </nav>
  );
}
