import bcrypt from "bcrypt";
import { prisma } from "database";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const res = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });
        const user = JSON.parse(JSON.stringify(res));
        console.log("USER : ", user);
        console.log("DATA : ", credentials);
        if (!user) {
          throw new Error("User not found");
        }
        const valid = await bcrypt.compare(
          credentials?.password || "",
          user.password
        );
        if (!valid) {
          throw new Error("Invalid password");
        }
        if (user.role !== "ADMIN") {
          throw new Error("Unauthorized");
        }
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user) token.role = user.role;
  //     return { ...token, ...user };
  //   },
  //   async session({ session, token }) {
  //     if (session?.user) {
  //       session.user = token as any;
  //     }
  //     return session;
  //   },
  // },
});

export { handler as GET, handler as POST };
