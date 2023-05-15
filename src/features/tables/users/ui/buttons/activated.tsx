import { UserMinusIcon, UserPlusIcon } from '@heroicons/react/24/outline'
import { Tooltip, Button, SvgIcon } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

type PropsType = {
  isActive: boolean
  userActivated: (isActive: boolean) => void
}

export const ActivatedButton: FC<PropsType> = ({ isActive, userActivated }) => {
  const { t } = useTranslation('users')

  const active = () => userActivated(true)
  const deactive = () => userActivated(false)

  return (
    <>
      {isActive ? (
        <Tooltip key="two" title={t('L_deactive')}>
          <Button color={'inherit'} onClick={deactive}>
            <SvgIcon>
              <UserMinusIcon />
            </SvgIcon>
          </Button>
        </Tooltip>
      ) : (
        <Tooltip key="one" title={t('L_activate')}>
          <Button color={'inherit'} onClick={active}>
            <SvgIcon>
              <UserPlusIcon />
            </SvgIcon>
          </Button>
        </Tooltip>
      )}
    </>
  )
}
