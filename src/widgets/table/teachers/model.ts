import { useQuery } from 'react-query'

import { TeacherType } from '@/features'
import { useCurrentUser } from '@/hooks'
import { noRefetch, useAxiosAuthClient } from '@/shared'

export const useListTeachersQuery = () => {
  const authInstance = useAxiosAuthClient()
  const user = useCurrentUser()

  const param = `school_id=${user?.school_id}&type_user=EMPLOYEE`

  return useQuery({
    queryKey: ['teachers_list', authInstance, user?.school_id],
    queryFn: () =>
      authInstance.get<TeacherType[]>(`/user/list_school?${param}`).then(res => res.data),
    enabled: !!authInstance && !!user,
    ...noRefetch,
    refetchInterval: false,
    refetchOnMount: true,
  })
}
