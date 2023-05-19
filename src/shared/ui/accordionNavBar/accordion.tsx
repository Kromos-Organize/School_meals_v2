import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import { styled } from '@mui/material/styles'

export const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  pl: '16px',
  pr: '16px',
  py: '3px',
  width: '100%',
  backgroundColor: 'transparent',
  '&:before': {
    backgroundColor: 'transparent',
  },
}))
