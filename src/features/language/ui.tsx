import { Box, MenuItem, Stack, IconButton, Popover } from '@mui/material'
import { alpha } from '@mui/material/styles'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { LangVariableType, useLocale } from '@/entities'

import { LANGS } from './const'

export const LanguagePopover = () => {
  const router = useRouter()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const currentLocale = useLocale(state => state.locale)
  const setLocale = useLocale(state => state.setLocale)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const open = Boolean(anchorEl)

  const handleList = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleItem = (index: number) => {
    setLocale(LANGS[index].value as LangVariableType)
    setSelectedIndex(index)
    handleClose()
  }

  useEffect(() => {
    currentLocale && setSelectedIndex(currentLocale === 'ru' ? 0 : 1)
  }, [currentLocale])

  const drawLanguages = LANGS.map((option, index) => {
    const click = () => handleItem(index)

    return (
      <Link
        style={{ textDecoration: 'none', color: 'inherit' }}
        key={option.label}
        href={router.pathname}
        locale={router.locale === 'ru' ? 'by' : 'ru'}
      >
        <MenuItem selected={index === selectedIndex} onClick={click}>
          <Box component="img" alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />

          {option.label}
        </MenuItem>
      </Link>
    )
  })

  return (
    <>
      <IconButton
        onClick={handleList}
        sx={{
          boxShadow: 3,
          padding: 0,
          width: 44,
          height: 44,
          bgcolor: 'rgb(239, 237, 249)',
          ...(open
            ? {
                bgcolor: theme =>
                  alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
              }
            : {}),
        }}
      >
        <img
          src={LANGS[selectedIndex].icon}
          alt={LANGS[selectedIndex].label}
          width={32}
          height={32}
        />
      </IconButton>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Stack spacing={0.75}>{drawLanguages}</Stack>
      </Popover>
    </>
  )
}
