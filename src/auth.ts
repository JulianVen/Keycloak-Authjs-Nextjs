import Keycloak from "next-auth/providers/keycloak";
import NextAuth from "next-auth";

export const { handlers, auth, signIn, signOut } = NextAuth({
  debug: process.env.NODE_ENV === "development",
  providers: [Keycloak],
  pages: {
    signIn: "/login",
    error: "/login",
  },
});
