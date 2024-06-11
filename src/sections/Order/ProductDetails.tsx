import { Box, Typography, useMediaQuery, createTheme } from '@mui/material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import CheckIcon from '@mui/icons-material/Check'

import Divider from '@mui/material/Divider'
import BasicTable from './BasicTable'

import { cardsDetails2 } from './OrderCards/CardDetailsForOrders'
import CardsForOrder from './OrderCards/CardsForOrder'

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
    fontFamily: 'Inter, Arial, sans-serif'
  }
})

// interface ProductDetailsOrReviewProps {
//   ProductDetailsOrReview: boolean
// }
const ProductDetails = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))

  const isLargeScreen = useMediaQuery(theme.breakpoints.down('lg'))
  return (
    <Box sx={{}}>
      <Paper elevation={1} sx={{ mb: 3 }}>
        <Typography component="div" sx={{ px: isSmallScreen ? 0 : 5, pb: isSmallScreen ? 0 : 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ display: isSmallScreen ? 'none' : null }}>
              <Typography
                component="div"
                sx={{ display: 'flex', flexDirection: 'column', gap: 4, mt: 4, mb: 6 }}>
                <Typography
                  component="p"
                  sx={{ fontSize: '16px', fontWeight: 400, color: '#000000' }}>
                  Morph into all-timer with the Giannis Immortality 2. A plush foam package combined
                  with a more focused fit in the midfoot in a super lightweight design means you can
                  maintain a high level of intensity and focus when victory hangs in the balancejust
                  like Giannis in the clutch.
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: '16px', fontWeight: 400, color: '#000000' }}>
                  Morph into all-timer with the Giannis Immortality 2. A plush foam package combined
                  with a more focused fit in the midfoot in a super lightweight design means you can
                  maintain a high level of intensity and focus when victory hangs in the balancejust
                  like Giannis in the clutch.
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: '16px', fontWeight: 400, color: '#000000' }}>
                  Morph into all-timer with the Giannis Immortality 2. A plush foam package combined
                  with a more focused fit in the midfoot in a super lightweight design means you can
                  maintain a high level of intensity and focus when victory hangs in the balancejust
                  like Giannis in the clutch.
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <BasicTable />
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: 'flex'
                // flexDirection: 'column',
              }}>
              <Divider
                orientation="vertical"
                // variant="middle"
                sx={{
                  background: '#959494',
                  width: '2px',
                  mx: 'auto',
                  display: isMediumScreen ? 'none' : null
                }}
              />
              <Box
                sx={{
                  display: isSmallScreen ? 'none' : 'flex',

                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 2
                }}>
                <Typography
                  component="div"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1
                  }}>
                  {cardsDetails2.map((x, ind) => {
                    const { item } = x
                    return (
                      <Box key={ind} sx={{ display: 'flex' }}>
                        <CheckIcon sx={{ color: '#8B96A5' }} />

                        <Typography component="p" sx={{ fontSize: '16px', color: '#505050' }}>
                          {item}
                        </Typography>
                      </Box>
                    )
                  })}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Typography>
      </Paper>
      <CardsForOrder />
    </Box>
  )
}
export default ProductDetails
