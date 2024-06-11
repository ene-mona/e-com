import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { menuItems } from './Navbar/NavbarList'
import React, { useRef } from 'react'
import { ListItemButton } from '@mui/material'
import { Link } from 'react-router-dom'
// import Divider from '@mui/material/Divider'

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  }
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(255, 255, 255,)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1)
  }
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)'
}))
type OnClickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => void
interface MyComponentProps {
  handleClose: OnClickHandler
}

const CustomizedAccordionst: React.FC<MyComponentProps> = ({ handleClose }) => {
  const [expanded, setExpanded] = React.useState<string | false>('')
  const selectedButtonRef = useRef<string | null>(null)
  const selectedButton = selectedButtonRef.current

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
    selectedButtonRef.current = panel
  }

  return (
    <div>
      {menuItems.map((item, ind) => {
        const title = item.title
        return (
          <Accordion
            expanded={expanded === title}
            onChange={handleChange(title)}
            key={`${title}-${ind}`}>
            <AccordionSummary
              aria-controls={`${title}-content`}
              id={`${title}-header`}
              panel1d-header
              // sx={{ background: 'red' }}
            >
              <Typography sx={{ ml: 1 }}>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {title === selectedButton &&
                item.submenu?.map((submenuItems, index) => (
                  <ListItemButton
                    href=""
                    sx={{
                      ml: '22.4px',
                      pl: 1,
                      '& :nth-of-type(1)': {
                        textDecoration: 'none',
                        color: '#000000'
                      }
                    }}
                    key={`${submenuItems.title}-${index}`}
                    onClick={handleClose}>
                    <Link to={submenuItems.title}>{submenuItems.title}</Link>
                  </ListItemButton>
                ))}
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  )
}
export default CustomizedAccordionst
