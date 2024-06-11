import { Box, Card, Typography, useMediaQuery, createTheme, ThemeProvider } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
// import theme from '../../theme/index'

import Grid from '@mui/material/Unstable_Grid2'
// Grid version 2
import { phoneCards } from '../Cards/CardDetails'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 700,
      lg: 1200,
      xl: 1536
    }
  },
  typography: {
    fontFamily: 'Poppins'
  }
})
const PhoneCards = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ mx: 4 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            borderBottom: '1px solid #EDEDED',
            mb: 7,
            fontFamily: 'Poppins'
          }}>
          <Typography
            sx={{
              //   borderBottom: '4px solid #008ECC',
              fontSize: isMediumScreen ? '15px' : '24px',
              fontWeight: 400,
              pr: 4,
              whiteSpace: 'nowrap',
              position: 'relative',
              color: '#666666'
            }}>
            Grab the best deal on&nbsp;
            <Box component="span" sx={{ color: '#008ECC' }}>
              Smartphones
            </Box>
            <Box
              sx={{
                position: 'absolute',
                width: isSmallScreen ? '70%' : '100%',
                height: '4px',
                background: '#008ECC'
              }}></Box>
          </Typography>
          <Button
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              ml: 'auto',
              '& > :first-of-type': {
                color: '#222222',
                textDecoration: 'none',
                textTransform: 'capitalize',
                fontSize: isMediumScreen ? '15px' : '20px',
                fontWeight: 400
              }
            }}>
            <Link to="">View All</Link>
            <ChevronRightIcon sx={{ color: '#008ECC' }} />
          </Button>
        </Box>
        <Grid container spacing={2}>
          {phoneCards.map((items, ind) => {
            const { cardNo, img, text, amount, oldAmount, save, width, height } = items
            return (
              <Grid xs={12} sm={6} md={4} lg={2.4} key={`${ind}-${cardNo}`}>
                <Card
                  sx={{
                    height: '368px',
                    background: '#f8f8f8',
                    position: 'relative',
                    borderRadius: '12px'
                  }}>
                  <CardMedia
                    component="img"
                    sx={{ width: `${width}`, height: `${height}`, mx: 'auto' }}
                    image={img}
                    title="phones"
                  />
                  <CardContent
                    sx={{
                      background: 'white',
                      position: 'absolute',
                      bottom: 0,
                      width: '100%'
                    }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        color: '#222222',
                        fontSize: isMediumScreen ? '9px' : '13px',
                        fontWeight: 400
                      }}>
                      {text}
                    </Typography>

                    <Typography
                      component="p"
                      color="text.secondary"
                      sx={{
                        color: '#222222',
                        fontSize: isMediumScreen ? '9px' : '13px',
                        fontWeight: 400,
                        display: 'flex'
                      }}>
                      {amount}
                      <Box sx={{ textDecoration: 'line-through' }}>{oldAmount}</Box>
                    </Typography>
                    <Box sx={{ width: '100%', height: '1px', background: '#EDEDED', my: 1 }}></Box>
                    <Typography
                      component="p"
                      sx={{
                        color: '#249B3E',
                        fontSize: isMediumScreen ? '9px' : '13px',
                        fontWeight: 400
                      }}>
                      {`Save - ${save}`}
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{
                      width: '43px',
                      height: '47px',
                      background: '#008ECC',
                      borderTopRightRadius: '12px',
                      borderBottomLeftRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      textAlign: 'center',
                      position: 'absolute',
                      top: 0,
                      right: 0
                    }}>
                    <Typography sx={{ color: '#fff', fontSize: '13px', fontWeight: 400 }}>
                      56% OFF
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </ThemeProvider>
  )
}
export default PhoneCards
