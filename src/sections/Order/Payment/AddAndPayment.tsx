import { useState, useEffect } from 'react'

import {
  Box,
  Divider,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
  CardMedia
} from '@mui/material'
import SimpleCollapseDelivery from './SimpleCollapseDelivery'
import AllButton from '../../../Components/Buttons/AllButton'
import { addAndPaymentArr, savedCards } from './AddAndPaymentArr'
import Checkout from '../Checkout'

import RadioGroup from '@mui/material/RadioGroup'

import FormControl from '@mui/material/FormControl'
import SimpleCollapseOption from './SimpleCollapsePayment'
import SimpleCollapsePayment from './SimpleCollapsePayment'

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

const AddAndPayment = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))

  const isLargeScreen = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
          px: isSmallScreen ? 0 : 4,
          mt: 3
        }}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={8}>
            <Paper
              sx={{ px: 2, py: 1, borderBottomRightRadius: '0px', borderBottomLeftRadius: '0px' }}>
              <Typography
                component="h3"
                sx={{ fontSize: '24px', fontWeight: 600, color: '#1C1C1C' }}>
                Delivery Address
              </Typography>
            </Paper>
            <Divider sx={{ background: '#DEE2E7' }} />
            <Paper
              elevation={0}
              sx={{
                borderTopRightRadius: '0px',
                borderTopLeftRadius: '0px'
              }}>
              {<SimpleCollapseDelivery />}
            </Paper>
          </Grid>
          <Grid item xs={12} lg={4}>
            {<Checkout />}
          </Grid>
        </Grid>
        <Box>
          <Paper
            sx={{ px: 2, py: 1, borderBottomRightRadius: '0px', borderBottomLeftRadius: '0px' }}>
            <Typography component="h3" sx={{ fontSize: '24px', fontWeight: 600, color: '#1C1C1C' }}>
              Payment option
            </Typography>
          </Paper>
          <Divider sx={{ background: '#DEE2E7' }} />
          <Paper
            elevation={0}
            sx={{
              borderTopRightRadius: '0px',
              borderTopLeftRadius: '0px'
            }}>
            <Box sx={{}}>
              <FormControl
                sx={{
                  width: '100%'
                }}>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue=""
                  name="radio-buttons-group">
                  {<SimpleCollapsePayment />}
                </RadioGroup>
              </FormControl>
            </Box>
          </Paper>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default AddAndPayment
