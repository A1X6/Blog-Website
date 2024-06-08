// import { handlers } from "@/auth"
// export const { GET, POST } = handlers

import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
// import Twitter from "next-auth/providers/twitter"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
//   providers: [Twitter],
});
