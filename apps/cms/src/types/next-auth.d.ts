// import { DefaultSession, DefaultUser } from "next-auth";
// import { DefaultJWT } from "next-auth/jwt";

// declare module "next-auth" {
//   interface Session {
//     user: {
//       _id: string;
//       name: string;
//       email: string;
//       image: string;
//       token: string;
//     } & DefaultSession;
//   }

//   interface User extends DefaultUser {
//     role: string;
//     name: string;
//     email: string;
//     image: string;
//     token: string;
//   }
// }

// declare module "next-auth/jwt" {
//   interface JWT extends DefaultJWT {
//     role: string;
//     name: string;
//     email: string;
//     image: string;
//     token: string;
//   }
// }
