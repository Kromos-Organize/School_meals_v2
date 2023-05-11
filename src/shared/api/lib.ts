import axios from 'axios'

export const noRefetch = {
  // refetchInterval: false,
  refetchIntervalInBackground: false,
  refetchOnMount: false,
  refetchOnReconnect: false,
  refetchOnWindowFocus: false,
  retryOnMount: false,
}

export const checkErrorResponse = (error: any): string => {
  if (error && axios.isAxiosError(error) && 'response' in error && error?.response) {
    return error.response.data.message
  }

  return 'no message'
}
