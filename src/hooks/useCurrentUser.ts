import { useSession } from 'next-auth/react'

export const useCurrentUser = () => {
  const { data: session } = useSession()

  if (session?.user) {
    return session.user
  }

  return undefined
}
