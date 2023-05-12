import { instance } from '@/shared'

export const logOut = () => instance.post('/auth/logout').then(res => res)
