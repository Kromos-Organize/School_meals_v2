import { INamesEventClient, INamesEventServer } from './types'

export const configSocket = {
  reconnectionDelayMax: 5000,
  forceBase64: true,
  withCredentials: true,
  transports: ['websocket'],
}

export const namesEventServer: INamesEventServer = {
  msgToServer: 'msgToServer',
}

export const namesEventClient: INamesEventClient = {
  msgToClient: 'msgToClient',
}
