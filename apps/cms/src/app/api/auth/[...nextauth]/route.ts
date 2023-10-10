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

      async authorize(credentials) {
        const uri = `http://localhost:3000/auth/login`;
        const res = await fetch(uri, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });
        const ADMIN_ROLE = process.env.ADMIN_ROLE ?? "";
        const data = await res.json();
        if (!data.success) throw new Error(data.message);
        if (data.user.role === "user")
          throw new Error("You are not authorized to access this page");
        else if (data.user.role === ADMIN_ROLE) return data.user;
        return data.user;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  callbacks: {
    async jwt({ token, user }) {
      //   if (user) token.role = user.role;
      return { ...token, ...user };
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user = token as any;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
