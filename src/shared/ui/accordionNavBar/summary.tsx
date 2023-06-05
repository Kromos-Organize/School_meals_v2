import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { SvgIcon } from '@mui/material'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import { styled } from '@mui/material/styles'

export const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <SvgIcon>
        <ChevronDownIcon />
      </SvgIcon>
    }
    {...props}
  />
))(({ theme }) => ({
  color: '#aab5c4',
  flexGrow: 1,
  fontFamily: theme.typography.fontFamily,
  fontSize: 14,
  fontWeight: 600,
  lineHeight: '24px',
  whiteSpace: 'nowrap',
  borderRadius: 15,
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
  },
  '&:active': {
    color: 'common.white',
  },
  '&:disabled': {
    color: 'neutral.500',
  },
}))
