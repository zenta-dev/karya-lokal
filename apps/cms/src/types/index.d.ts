import { Icons } from "@/components/global/post/Icons";

export type SideNavBarProps = {
  items: {
    href: string;
    title: string;
    icon: keyof typeof Icons;
  }[];
};
