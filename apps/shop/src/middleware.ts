import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/api/:path*",
    "/", 
  ],
  // ignoredRoutes: [
  //   "/((?!api|trpc))(_next.*|.+.[w]+$)",
  //   "/categories",
  //   "/categories/:categoryId*",
  //   "/categories/652bede52d97998506a46466",
  // ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
