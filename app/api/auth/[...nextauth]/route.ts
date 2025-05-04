import prisma from "@/lib/prisma"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { randomBytes, randomUUID } from "crypto"
import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)

        const user = await prisma.user.findFirst({
          where: {
            email: credentials?.username
          }
        })
        if (!user || user.password !== credentials?.password) return null
        return user
      }
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60, // 24 hours

    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex")
    }
  },
  jwt: {
    // The maximum age of the NextAuth.js issued JWT in seconds.
    // Defaults to `session.maxAge`.
    maxAge: 60 * 60 * 24 * 30,
    // You can define your own encode/decode functions for signing and encryption
    // async encode() {},
    // async decode() {},
  },
  callbacks: {
    async jwt({ token, user }) {
      // Add user id to the JWT token right after sign in
      if (user) {
        token.id = user.id;
        token.email = user.email;
        // Add other properties like role if needed: token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      // Add user id (and other properties from token) to the session object
      if (session.user && token.id) {
        session.user.email = token.email as string; // Cast if necessary based on your user model
        // Add other properties like role: session.user.role = token.role;
      }
      return session;
    }
  }
  // pages: {
  //   signIn: '/auth/log-in',
  //   signOut: '/auth/log-out',
  //   // error: '/auth/error', // Error code passed in query string as ?error=
  //   // verifyRequest: '/auth/verify-request', // (used for check email message)
  //   // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  // }
} satisfies NextAuthOptions

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
