import { Socket } from 'socket.io-client'

import { ClientEventType } from '../types'

export const toggleListeners = (
  socket: Socket | null,
  type: 'on' | 'off',
  listenFunction: ClientEventType
) => {
  if (socket) {
    const entries = Object.entries(listenFunction)

    entries.forEach(values => {
      const [name, func] = values

      socket[type](name, func)
    })
  }
}
