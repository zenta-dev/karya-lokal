"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Store } from "@karya-lokal/database";
import Image from "next/image";

interface MainNavProps {
  className?: string;
  props?: React.HTMLAttributes<HTMLElement>;
  store: Store;
}

export function MainNav({
  className,
  store,
  ...props
}: MainNavProps): React.ReactElement {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.userId}`,
      label: "Overview",
      active: pathname === `/${params.userId}`,
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
      href: `/${params.userId}/settings`,
      label: "Settings",
      active: pathname === `/${params.userId}/settings`,
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link href={`/${params.userId}`} className="text-lg font-bold">
        {/* lgo */}
        <div className="flex items-center space-x-2">
          <div className="relative w-8 h-8 ">
            <Image
              src={store.logo}
              className="rounded-lg"
              alt="logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <span className="hidden md:inline">{store.name}</span>
        </div>
      </Link>
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
