import { Socket } from 'socket.io-client'

import { namesEventServer } from '../config'

export const sendTestMessage = (socket: Socket) => (message: string) =>
  socket.emit(namesEventServer.msgToServer, message)

export const createFunctionsEmit = (socket: Socket | null) => {
  if (socket) {
    return {
      sendTestMessage: sendTestMessage(socket),
    }
  }
}
