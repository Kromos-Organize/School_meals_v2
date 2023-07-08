import { io } from 'socket.io-client'

import { configSocket } from '../config'

export const createSocket = (user: any) => {
  return io(`${process.env.NEXT_PUBLIC_BASE_URL}`, {
    auth: {
      accessToken: user?.accessToken,
    },
    ...configSocket,
  })
}
