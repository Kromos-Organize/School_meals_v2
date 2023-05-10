import axios from 'axios'

export const noRetryQuery = {
  refetchInterval: false,
  refetchIntervalInBackground: false,
  refetchOnWindowFocus: false,
  refetchOnMount: false,
  refetchOnReconnect: false,
}

export const checkErrorResponse = (error: any): string => {
  if (error && axios.isAxiosError(error) && 'response' in error && error?.response) {
    return error.response.data.message
  }

  return 'no message'
}
