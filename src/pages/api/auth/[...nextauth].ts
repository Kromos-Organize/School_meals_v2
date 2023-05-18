import axios from 'axios'
import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

import { instance } from '@/shared'

const authOptions: NextAuthOptions = {
  callbacks: {
    async jwt({ token, user, account }) {
      console.log(account)

      return { ...token, ...user }
    },
    async session({ session, token, user }) {
      session.user = token as any

      return session
    },
  },
  pages: {
    signIn: '/auth/login',
  },
  providers: [
    CredentialsProvider({
      // id: 'auth_login_back',
      name: 'Credentials',
      // type: 'credentials',
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
      // async authorize(credentials, req) {
      // const res = await axios.post('http://localhost:5001/auth/login', {
      //   email: credentials?.email,
      //   password: credentials?.password,
      //   isAdminDev: credentials?.isAdminDev,
      // })

      // console.log(res)
      // const user = res.data

      // const res = await fetch('http://localhost:5001/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(credentials),
      // })

      // const user = await res.json()

      // if (res.ok && user) {
      //   return user
      // }

      // return null
      // },
    }),
  ],
}

export default NextAuth(authOptions)
