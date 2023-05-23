import axios from 'axios'
import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      session.user = token as any

      return session
    },
  },
  pages: {
    signIn: '/auth/login',
  },
  providers: [
    CredentialsProvider({
      id: 'auth_login_user',
      name: 'Credentials_User',
      type: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
        isAdminDev: { label: 'IsAdminDev', type: 'checkbox' },
      },
      async authorize(credentials, req) {
        return (
          axios
            .post(
              `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
              {
                email: credentials?.email,
                password: credentials?.password,
                isAdminDev: credentials?.isAdminDev,
              },
              {
                withCredentials: true,
              }
            )
            .then(response => {
              return response.data
            })
            .catch(error => {
              console.log(error.response)
              throw new Error(error.response.data.message)
            }) || null
        )
      },
    }),
    CredentialsProvider({
      id: 'auth_login_cabinet',
      name: 'Credentials_Cabinet',
      type: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        accessToken: { type: 'text' },
      },
      async authorize(credentials, req) {
        return (
          axios
            .post(
              `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login/cabinet`,
              {
                email: credentials?.email,
              },
              {
                withCredentials: true,
                headers: {
                  Authorization: `Bearer ${credentials?.accessToken}`,
                },
              }
            )
            .then(response => {
              return response.data
            })
            .catch(error => {
              console.log(error.response)
              throw new Error(error.response.data.message)
            }) || null
        )
      },
    }),
    CredentialsProvider({
      id: 'auth_update_session',
      name: 'Credentials_Session',
      type: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        accessToken: { type: 'text' },
      },
      async authorize(credentials, req) {
        return (
          axios
            .post(
              `${process.env.NEXT_PUBLIC_BASE_URL}/auth/update_session`,
              {
                email: credentials?.email,
              },
              {
                withCredentials: true,
                headers: {
                  Authorization: `Bearer ${credentials?.accessToken}`,
                },
              }
            )
            .then(response => {
              return response.data
            })
            .catch(error => {
              console.log(error.response)
              throw new Error(error.response.data.message)
            }) || null
        )
      },
    }),
  ],
}

export default NextAuth(authOptions)
