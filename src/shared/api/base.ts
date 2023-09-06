import axios from 'axios'

const https = require('https')

export type AuthResponse = {
  id: number
  role: 'ADMIN' | 'S_ADMIN'
  fname: string
  name: string
  lname: string
  accessToken: string
}

const agent = new https.Agent({ rejectUnauthorized: false })

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  httpAgent: agent,
})
