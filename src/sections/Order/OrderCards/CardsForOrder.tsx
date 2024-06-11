import Grid from '@mui/material/Grid'
import {
  Box,
  Paper,
  CardMedia,
  Typography,
  ThemeProvider,
  createTheme,
  Icon,
  useMediaQuery
} from '@mui/material'
// import cardsDetails from './CardDetailsForOrders'
import { cardsDetails } from './CardDetailsForOrders'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1300,
      xl: 1536
    }
  },
  typography: {
    fontFamily: 'Poppins'
  }
})
interface CardsForOrderProps {
  isReview?: boolean
}
const CardsForOrder: React.FC<CardsForOrderProps> = ({ isReview }) => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))

  const isLargeScreen = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <ThemeProvider theme={theme}>
      <Grid
        spacing={2}
        sx={{
          display: isReview && isMediumScreen ? 'none' : 'flex',

          flexDirection: isReview ? 'column' : 'row',
          mt: isReview ? 3 : null,

          width: '100%',
          gap: 3,
          justifyContent: 'space-evenly'
        }}>
        {cardsDetails.map((items, ind) => {
          const { img1, img2, img3, icon, brand, Discount, backGroundColor, color } = items
          return (
            <Box sx={{}}>
              <Grid xs={isReview ? 12 : 4} sx={{ zIndex: 4 }}>
                <Box
                  sx={{
                    position: 'relative'

                    // width: '389px',
                    // height: '207px'
                  }}>
                  <CardMedia
                    component="img"
                    src={img1}
                    alt={`Order-images`}
                    sx={{
                      // width: '389px',
                      // height: '207px',

                      zIndex: 2
                    }}
                  />
                  <CardMedia
                    component="img"
                    src={img3}
                    alt={`Order-images`}
                    sx={{
                      width: '45%',
                      // height: '185px',
                      position: 'absolute',
                      right: 0,
                      top: 0,
                      // transform: ' translateY(-50%)',
                      zIndex: 1
                    }}
                  />
                  <CardMedia
                    component="img"
                    src={img2}
                    alt={`Order-images`}
                    sx={{
                      width: '45%',
                      // height: '189px',
                      borderRadius: ' 16px ',
                      position: 'absolute',
                      right: 0,
                      top: 0
                    }}
                  />
                  <Typography
                    component="div"
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',

                      position: 'absolute',
                      top: 0,
                      left: 0,
                      ml: 1,
                      py: 2,
                      height: '100%'
                    }}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: isSmallScreen ? '2px' : '8px',
                        width: isSmallScreen ? '30px' : isMediumScreen ? '50px' : '97px',
                        height: isSmallScreen ? '10px' : isMediumScreen ? '25px' : '39px',
                        background: `${backGroundColor}`,
                        position: 'absolute',
                        top: '7px'
                      }}>
                      <Typography
                        component="p"
                        sx={{
                          fontSize: isSmallScreen ? '5px' : isMediumScreen ? '11px' : '14px',
                          color: `${color}`
                        }}>
                        {brand}
                      </Typography>
                    </Box>
                    {icon && (
                      <Icon
                        component={icon}
                        sx={{
                          fontSize: isSmallScreen ? '11px' : isMediumScreen ? '25px' : '50px',
                          padding: '3px',
                          background: 'white',
                          borderRadius: isSmallScreen ? '2px' : isMediumScreen ? '8px' : '16px',
                          // position: 'absolute',
                          m: 'auto'
                        }}
                      />
                    )}

                    <Typography
                      component="p"
                      sx={{
                        fontSize: isSmallScreen ? '7px' : isMediumScreen ? '13px' : '24px',
                        fontWeight: 600,
                        color: `${color}`,
                        whiteSpace: 'nowrap',
                        position: 'absolute',
                        bottom: '6px'
                      }}>
                      {Discount}
                    </Typography>
                  </Typography>
                </Box>
              </Grid>
            </Box>
          )
        })}
      </Grid>
    </ThemeProvider>
  )
}
export default CardsForOrder
