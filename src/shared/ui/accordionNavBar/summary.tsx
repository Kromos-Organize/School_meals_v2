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
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))
