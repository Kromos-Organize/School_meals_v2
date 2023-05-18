import { UsersTable } from '@/features'

import {
  useActivateUserMutate,
  useBlockUserMutate,
  useListUsersQuery,
  useLoginCabinetMutate,
  useUnlockUserMutate,
} from './model'

export const ShowTableUsers = () => {
  const { data } = useListUsersQuery()

  const { mutate: activated, isLoading: isActivated } = useActivateUserMutate()
  const { mutate: blockUser, isLoading: isBlocked } = useBlockUserMutate()
  const { mutate: unlockUser, isLoading: isUnlocked } = useUnlockUserMutate()
  // const { mutate: signCabinet, isLoading: isSign } = useLoginCabinetMutate()

  const isLoading = isActivated || isBlocked || isUnlocked

  return (
    <UsersTable
      users={data}
      activated={activated}
      blockUser={blockUser}
      unlockUser={unlockUser}
      signCabinet={() => {}}
      isLoading={isLoading}
    />
  )
}
