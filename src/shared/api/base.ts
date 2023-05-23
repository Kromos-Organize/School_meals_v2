import axios from 'axios'

export type AuthResponse = {
  id: number
  role: 'ADMIN' | 'S_ADMIN'
  fname: string
  name: string
  lname: string
  accessToken: string
}

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
})

export const apiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
})
