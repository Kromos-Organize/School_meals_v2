import { NextAuthOptions, getServerSession } from 'next-auth'
import { useEffect } from 'react'

import { useCurrentUser } from '@/hooks'

import { instance } from './base'
import { updateRequestIntercept, updateResponseIntercept, useRefreshToken } from './lib'
import { CurrentUserType } from './types'

export const useAxiosAuthClient = (currentUser?: CurrentUserType) => {
  const user = currentUser ?? useCurrentUser()
  const refreshToken = useRefreshToken(user)

  useEffect(() => {
    const requestIntercept = updateRequestIntercept(instance, user)

    const responseIntercept = updateResponseIntercept(instance, user, refreshToken)

    return () => {
      instance.interceptors.request.eject(requestIntercept)
      instance.interceptors.response.eject(responseIntercept)
    }
  }, [user])

  return instance
}

export const useAxiosAuthServer = async (context: any, authOptions: NextAuthOptions) => {
  const session = await getServerSession(context.req, context.res, authOptions)

  const user = session?.user

  const refreshToken = useRefreshToken(user)

  updateRequestIntercept(instance, user)
  updateResponseIntercept(instance, user, refreshToken)

  return {
    instanceServer: instance,
    user,
  }
}
