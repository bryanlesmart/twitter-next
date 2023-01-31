import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "online",
          response_type: "code",
        },
      },
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "auth/signin",
  },

  callbacks: {
    async session({ session, token }) {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLowerCase();
      session.user.id = token.sub;
      return session;
    },
  },
};

export default NextAuth(authOptions);
