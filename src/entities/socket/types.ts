export interface INamesEventServer {
  msgToServer: 'msgToServer'
}

export interface INamesEventClient {
  msgToClient: 'msgToClient'
}

export enum StatusSocket {
  'DISCONNECTED',
  'CONNECTED',
  'CONNECTED_ERROR',
}

export type NamesEventClientType = 'msgToClient'

export type ClientEventType = {
  [key in NamesEventClientType]: (data: any) => void
}
