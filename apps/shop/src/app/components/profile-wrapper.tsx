import { ClerkProvider, UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import { BiUser } from "react-icons/bi";

export const ProfileWrapper = () => {
  const { userId } = auth();
  return userId ? (
    <ClerkProvider>
      <UserButton afterSignOutUrl="/" />
    </ClerkProvider>
  ) : (
    <Link href="/sign-in">
      <BiUser />
    </Link>
  );
};
