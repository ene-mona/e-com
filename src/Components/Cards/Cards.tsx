import { CardsProps, SwiperContent, ImageDetails } from '../Types'

import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  IconButton,
  Box,
  useMediaQuery
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { mycards, cardSwiper } from './CardDetails'
import Swipe from '../Swiper/Swipe'
import {
  orderAndCartsCards,
  orderAndCartsCards2,
  orderAndCartsCards3
} from '../../sections/Order/Cart/CartAndOrder/OrderAndCartArray'
// import {
//   orderAndCartsCards,
//   orderAndCartsCards2,
//   orderAndCartsCards3
// } from '../Order/Cart/CartAndOrder/OrderAndCartArray'

const Cards: React.FC<CardsProps> = ({ cards, images }) => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'))
  const isXLargeScreen = useMediaQuery(theme.breakpoints.up('lg'))
  const renderCard = (card: SwiperContent) => {
    const { cardNo, color, img, Ellipse, text, amount } = card
    if (cards !== orderAndCartsCards3) {
      return (
        <Card
          key={`${cardNo}`}
          sx={{
            width: '100%',
            background: `${color}`,
            height: '430px',
            position: 'relative'
          }}>
          <CardHeader
            action={
              <IconButton
                aria-label="settings"
                sx={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: '#fff'
                }}>
                <FavoriteBorderIcon sx={{ width: '14.67px', height: '13.33px' }} />
              </IconButton>
            }
          />
          <CardMedia
            component="img"
            image={img}
            alt={`images-${cardNo}`}
            sx={{ width: '200px', height: '200px', mx: 'auto' }}
          />
          <CardContent sx={{ pb: 4, color: '#3E3E3E' }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500, fontSize: '12px' }}>
              Colors
            </Typography>
            <Box sx={{ display: 'flex', gap: 0.7 }}>
              {Ellipse?.map((ellipse, ind) => (
                <CardMedia
                  component="img"
                  src={ellipse}
                  alt={`Ellipse-${ind}-${cardNo}`}
                  sx={{ width: '16px', height: '16px' }}
                  key={ind}
                />
              ))}
            </Box>
            <Box sx={{ maxWidth: '450px' }}>
              <Typography
                variant="body2"
                sx={{
                  height: '56px',
                  my: 3,
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '24px'
                  // overflowY: 'scroll'
                }}>
                {text}
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 500,
                fontSize: '14px',
                position: 'absolute',
                bottom: '15px'
              }}>
              {amount} $
            </Typography>
          </CardContent>
        </Card>
      )
    } else {
      return (
        <Box sx={{ position: 'relative', height: '181px' }}>
          <CardMedia
            component="img"
            src={img}
            alt="orderCartImage"
            sx={{ height: '181px', borderRadius: '5px' }}
          />

          <CardContent
            sx={{
              pb: 4,
              color: '#3E3E3E',
              position: 'absolute',
              top: '100%',
              transform: 'translateY(-100%)'
            }}>
            <Typography
              variant="body2"
              sx={{ mb: 1, fontWeight: 500, fontSize: '12px', color: '#FFFFFF' }}>
              Colors
            </Typography>
            <Box sx={{ display: 'flex', gap: 0.7 }}>
              {Ellipse?.map((ellipse, ind) => (
                <CardMedia
                  component="img"
                  src={ellipse}
                  alt={`Ellipse-${ind}-${cardNo}`}
                  sx={{ width: '16px', height: '16px' }}
                  key={ind}
                />
              ))}
            </Box>
            <Box sx={{ maxWidth: '450px' }}>
              <Typography
                variant="body2"
                sx={{
                  height: '56px',
                  my: 1,
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '24px',
                  color: '#FFFFFF'
                  // overflowY: 'scroll'
                }}>
                {text}
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 500,
                fontSize: '14px',
                position: 'absolute',
                bottom: '35px',
                color: '#FFFFFF'
              }}>
              {amount} $
            </Typography>
          </CardContent>
        </Box>
      )
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ mx: 4 }}>
        <Box sx={{}}>
          <Grid container spacing={2} sx={{}}>
            {cards === mycards ? (
              <Grid
                item
                xs={12}
                sm={6}
                md={12}
                lg={3.9}
                sx={{
                  '& > :first-of-type': {
                    mb: (isLargeScreen && !isXLargeScreen) || isSmallScreen ? 2 : '70px',
                    mr: isLargeScreen && !isXLargeScreen ? 5 : null
                  },
                  display: isLargeScreen && !isXLargeScreen ? 'flex' : null,
                  position: 'relative'
                }}>
                {images?.map((details, ind) => {
                  const { img, text } = details
                  return (
                    <Box
                      key={ind}
                      sx={{
                        position: 'relative'
                      }}>
                      <CardMedia
                        component="img"
                        src={img}
                        alt={`images-${ind}`}
                        sx={{
                          width: '100%',
                          height: '180px',
                          borderRadius: '5px'
                        }}
                      />

                      <Typography
                        sx={{
                          position: 'absolute',
                          bottom: '15px',
                          left: '20px',
                          color: '#FFFFFF',
                          fontSize: '16px',
                          fontWeight: 500
                        }}>
                        {text}
                      </Typography>
                    </Box>
                  )
                })}
              </Grid>
            ) : null}
            {cards.map((details, ind) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={2.7} key={ind}>
                  {cards === mycards && <>{renderCard(details)}</>}
                </Grid>
              )
            })}
            {/* OrderAndCarts */}
            {cards === orderAndCartsCards ? (
              <Grid
                item
                xs={12}
                sx={{
                  '& > :first-of-type': {
                    mb: 2
                    // mb: (isLargeScreen && !isXLargeScreen) || isSmallScreen ? 2 : '70px',
                    // mr: isLargeScreen && !isXLargeScreen ? 5 : null
                  },
                  display: isLargeScreen && !isXLargeScreen ? 'flex' : null,
                  position: 'relative'
                }}>
                {images?.map((details, ind) => {
                  const { img, text } = details
                  return (
                    <Box
                      key={ind}
                      sx={{
                        position: 'relative'
                      }}>
                      <CardMedia
                        component="img"
                        src={img}
                        alt={`images-${ind}`}
                        sx={{
                          width: '100%',
                          height: '180px',
                          borderRadius: '5px'
                        }}
                      />

                      <Typography
                        sx={{
                          position: 'absolute',
                          bottom: '15px',
                          left: '20px',
                          color: '#FFFFFF',
                          fontSize: '16px',
                          fontWeight: 500
                        }}>
                        {text}
                      </Typography>
                    </Box>
                  )
                })}
                {cards.map((details, ind) => {
                  return (
                    <Grid item xs={12} key={ind}>
                      {cards === orderAndCartsCards && <>{renderCard(details)}</>}
                    </Grid>
                  )
                })}
              </Grid>
            ) : null}

            {/* ORDERANDCARTS2 */}
            {cards === orderAndCartsCards2 ? (
              <Grid
                item
                xs={12}
                sx={{
                  display: 'flex',
                  gap: 3,
                  '& > :first-of-type': {
                    // mb: 2
                    // mb: (isLargeScreen && !isXLargeScreen) || isSmallScreen ? 2 : '70px',
                    // mr: isLargeScreen && !isXLargeScreen ? 5 : null
                  },
                  // display: isLargeScreen && !isXLargeScreen ? 'flex' : null,
                  position: 'relative'
                }}>
                {cards.map((details, ind) => {
                  return (
                    <Grid item xs={6} key={ind}>
                      {cards === orderAndCartsCards2 && <>{renderCard(details)}</>}
                    </Grid>
                  )
                })}
              </Grid>
            ) : null}

            {/* ORDERANDCARTS3 */}
            {cards === orderAndCartsCards3 ? (
              <Grid
                item
                xs={12}
                sx={{
                  display: 'flex',
                  gap: 3,
                  '& > :first-of-type': {
                    // mb: 2
                    // mb: (isLargeScreen && !isXLargeScreen) || isSmallScreen ? 2 : '70px',
                    // mr: isLargeScreen && !isXLargeScreen ? 5 : null
                  },
                  // display: isLargeScreen && !isXLargeScreen ? 'flex' : null,
                  position: 'relative'
                }}>
                {cards.map((details, ind) => {
                  return (
                    <Grid item xs={12} key={ind}>
                      {cards === orderAndCartsCards3 && <>{renderCard(details)}</>}
                    </Grid>
                  )
                })}
              </Grid>
            ) : null}

            {cards === cardSwiper && (
              <Grid item xs={12}>
                <Swipe
                  swiperContent={cardSwiper}
                  renderSlideContent={content => renderCard(content)}
                />
              </Grid>
            )}
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Cards
