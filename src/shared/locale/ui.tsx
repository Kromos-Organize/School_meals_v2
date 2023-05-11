import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC, memo, useState } from 'react'

import styles from './styles.module.scss'

export const Locale: FC = memo(() => {
  const router = useRouter()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [selectedIndex, setSelectedIndex] = useState(router.locale === 'ru' ? 0 : 1)
  const open = Boolean(anchorEl)

  const options = ['RU', 'BY']

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget)

  const handleMenuItemClick = async (event: React.MouseEvent<HTMLElement>, index: number) => {
    setSelectedIndex(index)
    setAnchorEl(null)
  }
  const dropList = options.map((option, index) => (
    <Link key={option} href={router.pathname} locale={router.locale === 'ru' ? 'be' : 'ru'}>
      <MenuItem
        key={option}
        selected={index === selectedIndex}
        onClick={event => handleMenuItemClick(event, index)}
      >
        {option}
      </MenuItem>
    </Link>
  ))
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <List component="nav" className={styles.listBlock}>
        <ListItem
          sx={{ color: '#FFF' }}
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText secondary={options[selectedIndex]} />
        </ListItem>
      </List>
      <Menu
        sx={{ color: '#FFF' }}
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {dropList}
      </Menu>
    </>
  )
})
