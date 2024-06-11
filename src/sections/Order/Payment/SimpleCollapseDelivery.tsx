import { useState, useEffect } from 'react'

import {
  Box,
  Divider,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
  Button
} from '@mui/material'
import Collapse from '@mui/material/Collapse'

import Stack from '@mui/material/Stack'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

import { addAndPaymentArr } from './AddAndPaymentArr'
import AllButton from '../../../Components/Buttons/AllButton'
import { DeliveryItem } from '../../../Components/Types'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 900,
      lg: 1300,
      xl: 1536
    }
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif,Poppins'
  }
})

const SimpleCollapseDelivery = () => {
  const [checked, setChecked] = useState(false)
  const [copiedArr, setCopiedArr] = useState<DeliveryItem[]>([])
  const [tog, setTog] = useState(false)
  const [numberOfArrayDisplayed, setNumberOfArrayDisplayed] = useState(4)

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('lg'))

  useEffect(() => {
    setCopiedArr(addAndPaymentArr.slice(0, numberOfArrayDisplayed))
  }, [numberOfArrayDisplayed])

  const handleShowAll = () => {
    setChecked(prev => !prev)
    setNumberOfArrayDisplayed(prev => (prev === 4 ? addAndPaymentArr.length : 4))
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    copiedArr[Number(e.currentTarget.id)].hover = true

    setTog(!tog)
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // setIsHovered(false)
    copiedArr[Number(e.currentTarget.id)].hover = false
    setTog(!tog)
  }

  return (
    <>
      <Box sx={{}}>
        <Box
          sx={{
            '& > :not(style)': {
              display: 'flex',
              justifyContent: 'space-around',
              height: '100%',
              width: '100%'
            }
          }}>
          <Box sx={{}}>
            <Collapse
              sx={{
                width: '100%'
              }}
              in={!checked || checked}
              collapsedSize={numberOfArrayDisplayed * 95.5}>
              {copiedArr.map((items, ind) => {
                const { name, number, text, hover } = items

                return (
                  <Box
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    key={`${number}-${ind}`}
                    id={`${ind}`}
                    sx={{
                      background: hover ? '#F0F0F0' : null,
                      display: 'flex',
                      //   alignItems: 'end',
                      gap: 4,
                      p: 2,
                      width: '100%',
                      position: 'relative'
                    }}>
                    <Box sx={{ mt: 1.5 }}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="7.5" stroke="#1877F2" />
                        <circle cx="8" cy="8" r="5" fill="#1877F2" />
                      </svg>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                      <Typography
                        component="div"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2.5
                          //   mb: 0.7
                        }}>
                        <Typography
                          component="p"
                          sx={{ color: '#000', fontSize: '16px', fontFamily: 'Poppins' }}>
                          {name}
                        </Typography>
                        <Typography
                          component="p"
                          sx={{ color: '#000', fontSize: '16px', fontFamily: 'Poppins' }}>
                          {number}
                        </Typography>
                      </Typography>
                      <Typography
                        component="p"
                        sx={{
                          color: '#888',
                          fontFamily: 'Poppins',
                          width: isSmallScreen ? '100%' : isMediumScreen ? '80%' : '50%'
                        }}>
                        {text}
                      </Typography>

                      <Box
                        sx={{
                          display: 'flex',
                          mt: 1.5,
                          flexDirection: 'row',
                          alignItems: 'center'
                        }}>
                        {hover && <AllButton text="DELIVERY HERE" />}
                        <AllButton text="EDIT" />
                      </Box>
                    </Box>
                  </Box>
                )
              })}
            </Collapse>
          </Box>
        </Box>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: '2px solid #E0E0E0',
            py: 1,
            pr: 2,
            pl: isSmallScreen ? 2 : 7
          }}>
          {checked ? (
            <Button
              startIcon={<ExpandLessIcon />}
              onClick={handleShowAll}
              sx={{
                color: '#1877F2',
                fontSize: isSmallScreen ? '12px' : '18px',
                fontWeight: 600,
                textTransform: 'none'
              }}>{`View less`}</Button>
          ) : (
            <Button
              startIcon={<ExpandMoreIcon />}
              onClick={handleShowAll}
              sx={{
                color: '#1877F2',
                fontSize: isSmallScreen ? '12px' : '18px',
                fontWeight: 600,
                textTransform: 'none'
              }}>{`View all ${addAndPaymentArr.length} address `}</Button>
            // <AllButton
            //   text={`View all ${addAndPaymentArr.length} address `}
            //   onClick={handleShowAll}
            //   startIcon={<ExpandMoreIcon />}
            // />
          )}

          <AllButton text="Add-New" />
        </Stack>
      </Box>
    </>
  )
}
export default SimpleCollapseDelivery
