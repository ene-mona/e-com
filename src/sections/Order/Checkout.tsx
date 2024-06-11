import { useState, useContext } from 'react'

import {
  Box,
  CardMedia,
  useMediaQuery,
  Paper,
  Typography,
  createTheme,
  Divider
} from '@mui/material'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import AllButton from '../../Components/Buttons/AllButton'
import { paymentMethod } from './Cart/CartAndOrder/OrderAndCartArray'
import { useLocation } from 'react-router-dom'
import { useAppSelector } from '../../Redux/Store/hooks'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 900,
      lg: 1280,
      xl: 1536
    }
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif'
  }
})

const Checkout = () => {
  const [inputValue, setInputValue] = useState('')
  const [discount, setDiscount] = useState(260)
  const [tax, setTax] = useState(14)

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('lg'))

  const location = useLocation()
  const subTotal = useAppSelector(state => state.checkout.subTotal)

  let totalPayable = subTotal + tax - discount

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <Box>
      <Paper
        elevation={isMediumScreen ? 0 : 1}
        sx={{ pt: 1, pb: 3, px: 2, background: isMediumScreen ? '#f8f8f8' : null }}>
        <Typography component="p" sx={{ fontSize: '21px', color: '#505050', mb: 1 }}>
          Have a coupon?
        </Typography>

        <form onSubmit={handleSubmit}>
          <FormControl sx={{ width: isSmallScreen ? '170px' : null }}>
            <TextField
              sx={{}}
              label="Add coupon"
              variant="outlined"
              value={inputValue}
              onChange={handleFormChange}
            />
          </FormControl>
          <AllButton text="Apply" type="submit" />
        </form>
      </Paper>
      <Paper sx={{ mt: 2, px: 2, py: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            component="p"
            sx={{ fontSize: isMediumScreen ? '16px' : '21px', color: '#505050' }}>
            Subtotal:
          </Typography>
          <Typography
            component="p"
            sx={{ fontSize: isMediumScreen ? '16px' : '21px', color: '#505050' }}>
            RS {subTotal}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            component="p"
            sx={{ fontSize: isMediumScreen ? '16px' : '21px', color: '#505050' }}>
            Discount:
          </Typography>
          <Typography
            component="p"
            sx={{ fontSize: isMediumScreen ? '16px' : '21px', color: '#FA3434' }}>
            -RS {discount.toFixed(2)}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            component="p"
            sx={{ fontSize: isMediumScreen ? '16px' : '21px', color: '#505050' }}>
            Tax:
          </Typography>
          <Typography
            component="p"
            sx={{ fontSize: isMediumScreen ? '16px' : '21px', color: '#00B517' }}>
            +RS {tax.toFixed(2)}
          </Typography>
        </Box>
        {location.pathname === '/MyCart' ? <Divider sx={{ background: '#DEE2E7', my: 2 }} /> : null}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: location.pathname !== '/MyCart' ? 6 : 0
          }}>
          <Typography
            component="p"
            sx={{
              fontWeight: 600,
              fontSize: isMediumScreen ? '18px' : '21px',
              color: '#1C1C1C'
            }}>
            Total:
          </Typography>
          <Typography
            component="p"
            sx={{
              fontWeight: 600,
              fontSize: isMediumScreen ? '18px' : '26px',
              color: '#1C1C1C'
            }}>
            RS {totalPayable}/-
          </Typography>
        </Box>
        {location.pathname === '/MyCart' ? (
          <Box sx={{ my: 2 }}>
            <AllButton text="Checkout" />
          </Box>
        ) : null}
        {location.pathname !== '/MyCart' ? <Divider sx={{ background: '#DEE2E7', my: 2 }} /> : null}

        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          {paymentMethod.map((item, ind) => {
            const { img, width, height } = item
            return (
              <Box
                key={`${item} - ${ind}`}
                sx={{
                  width: '43px',
                  height: '28px',
                  border: '1px solid #F7F7F7',
                  borderRadius: '1.26px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                <CardMedia
                  component="img"
                  src={img}
                  alt="payment methods"
                  sx={{ width: `${width}`, height: `${height}` }}
                />
              </Box>
            )
          })}
        </Box>
      </Paper>
    </Box>
  )
}
export default Checkout
