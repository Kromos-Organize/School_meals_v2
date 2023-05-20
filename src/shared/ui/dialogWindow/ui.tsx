import { XMarkIcon } from '@heroicons/react/24/outline'
import { Box, ThemeProvider, createTheme } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import SvgIcon from '@mui/material/SvgIcon'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { FC } from 'react'

import { Transition } from './transition'

type PropsType = {
  isOpen: boolean
  close: () => void
  text: string
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
})

export const DialogWindow: FC<PropsType> = ({ isOpen, close, text }) => {
  return (
    <Dialog fullScreen open={isOpen} onClose={close} TransitionComponent={Transition}>
      <ThemeProvider theme={darkTheme}>
        <AppBar sx={{ position: 'fixed' }}>
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <IconButton edge="start" color="inherit" onClick={close} aria-label="close">
              <SvgIcon>
                <XMarkIcon />
              </SvgIcon>
            </IconButton>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <Box sx={{ marginTop: 5, paddingLeft: 3 }}>
        <pre>{text}</pre>
      </Box>
    </Dialog>
  )
}
