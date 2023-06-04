import { LockClosedIcon, LockOpenIcon } from '@heroicons/react/24/outline'
import { Tooltip, Button, SvgIcon } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

type PropsType = {
  isBlock: boolean
  blocked: () => void
  unlocked: () => void
}

export const BlockedButton: FC<PropsType> = ({ isBlock, blocked, unlocked }) => {
  const { t } = useTranslation('users')

  return (
    <>
      {isBlock ? (
        <Tooltip key="two" title={t('L_unlock_user')}>
          <Button color={'inherit'} onClick={unlocked}>
            <SvgIcon>
              <LockClosedIcon />
            </SvgIcon>
          </Button>
        </Tooltip>
      ) : (
        <Tooltip key="one" title={t('L_block_user')}>
          <Button color={'inherit'} onClick={blocked}>
            <SvgIcon>
              <LockOpenIcon />
            </SvgIcon>
          </Button>
        </Tooltip>
      )}
    </>
  )
}
