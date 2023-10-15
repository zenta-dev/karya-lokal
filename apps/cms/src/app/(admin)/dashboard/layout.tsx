import { SidebarNav } from "@/components/dashboard/SideBarNav";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Karya Loakl CMS",
  description: "Karya Loakl CMS",
};

const sidebarNavItems = [
  {
    title: "Products",
    href: "/dashboard",
  },
  {
    title: "Categories",
    href: "/dashboard/categories",
  },
  {
    title: "Orders",
    href: "/dashboard/orders",
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <div className="hidden space-y-6 p-10 pb-16 md:block">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Karya Loakl CMS</h2>
        <p className="text-muted-foreground">
          Manage your products, categories, and orders.
        </p>
      </div>
      <Separator className="my-6" />
      <div className="flex">
        <SidebarNav className="w-1/5" items={sidebarNavItems} />
        <div className="px-4">{children}</div>
      </div>
    </div>
  );
}
