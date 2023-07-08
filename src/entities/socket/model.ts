import { useEffect, useState } from 'react'
import { Socket } from 'socket.io-client'

import { useCurrentUser } from '@/hooks'
import { useRefreshToken } from '@/shared'

import { createFunctionsEmit } from './lib/emit'
import { createSocket } from './lib/lib'
import { ClientEventType, StatusSocket } from './types'

export const useSocket = () => {
  const user = useCurrentUser()

  const [socket, setSocket] = useState<Socket | null>(null)
  const [status, setStatus] = useState<StatusSocket>(StatusSocket.DISCONNECTED)
  const [isRefresh, setIsRefresh] = useState(false)

  const refreshToken = useRefreshToken(user)

  useEffect(() => {
    if (user) {
      refreshToken().then(() => setIsRefresh(true))
    }
  }, [user])

  useEffect(() => {
    if (!socket && user && isRefresh) {
      const _socket = createSocket(user)

      setSocket(_socket)
      setStatus(StatusSocket.CONNECTED)
    } else {
      socket?.connect()
      setStatus(StatusSocket.CONNECTED)
    }

    return () => {
      if (status === StatusSocket.CONNECTED) {
        socket?.disconnect()
        setStatus(StatusSocket.DISCONNECTED)
      }
    }
  }, [user, isRefresh])

  return {
    emit: createFunctionsEmit(socket),
    socket,
    status,
  }
}
