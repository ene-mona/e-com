import { useEffect, useState, useContext } from 'react'

import {
  Box,
  CardMedia,
  Grid,
  useMediaQuery,
  ThemeProvider,
  Paper,
  Typography,
  createTheme,
  IconButton,
  Icon,
  CardContent,
  Divider
} from '@mui/material'

// import AllButton from '../../Buttons/AllButton'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import {
  OrderAndCart,
  about,
  orderAndCartImages,
  orderAndCartsCards,
  orderAndCartsCards2,
  orderAndCartsCards3,
  paymentMethod,
  techImage
} from './CartAndOrder/OrderAndCartArray'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Stack from '@mui/material/Stack'
import FormControl from '@mui/material/FormControl'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Cards from '../../../Components/Cards/Cards'

import { mycards, images } from '../../../Components/Cards/CardDetails'
import AllButton from '../../../Components/Buttons/AllButton'

import Checkout from '../Checkout'

import { useAppDispatch, useAppSelector } from '../../../Redux/Store/hooks'
import {
  AddOrReduceCartItems,
  RemoveFromCartArr,
  RemoveAllCartArr
} from '../../../Redux/Checkout/CheckoutSlice'

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

const MyCart = () => {
  const [toggle, setToggle] = useState(false)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('lg'))

  const cartArrToDisplay = useAppSelector(state => state.checkout.array)

  const dispatch = useAppDispatch()

  const handleChange = (event: SelectChangeEvent<number>, id: number) => {
    const value = Number(event.target.value)
    const payload = { id, value }

    dispatch(AddOrReduceCartItems(payload))
  }

  const handleDelete = (id: number) => {
    dispatch(RemoveFromCartArr(id))
  }
  const handleDeleteAll = () => {
    dispatch(RemoveAllCartArr())
  }

  const handleFavourite = (id: number) => {
    let searchCart = cartArrToDisplay.find((item, ind) => item.id == id)
    if (searchCart) {
      if (searchCart.favorite === false) {
        searchCart.favorite = true
      } else {
        searchCart.favorite = false
      }
    }
    setToggle(!toggle)
  }
  useEffect(() => {
    const endDate = new Date('2023-08-31T00:00:00').getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const timeLeft = endDate - now

      if (timeLeft <= 0) {
        clearInterval(interval)
        setDays(0)
        setHours(0)
        setMinutes(0)
        setSeconds(0)
      } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

        setDays(days)
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          px: isMediumScreen ? 0 : 4,
          mt: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={8}>
            <Paper
              elevation={isMediumScreen ? 0 : 1}
              sx={{ px: 2, py: 1, background: isMediumScreen ? '#f8f8f8' : null }}>
              <Typography
                component="h3"
                sx={{ fontSize: '24px', fontWeight: 600, color: '#1C1C1C', mb: 2 }}>
                My cart ({cartArrToDisplay.length})
              </Typography>
              {cartArrToDisplay.map((items, ind) => {
                const { id, img, name, desc, seller, amount, quantity, totalAmount, favorite } =
                  items
                return (
                  <>
                    <Box key={ind} sx={{ position: 'relative' }}>
                      <Typography
                        component="div"
                        sx={{
                          pb: 4,
                          pt: 1,
                          display: 'flex',
                          justifyContent: 'space-between',
                          flexWrap: 'wrap'
                        }}>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <Box
                            sx={{
                              width: isMediumScreen ? '81px' : '100px',
                              height: isMediumScreen ? '81px' : '100px',
                              background: '#F7F7F7',
                              border: '1.24px solid #E0E0E0',
                              borderRadius: isMediumScreen ? '6px' : '7px',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center'
                            }}>
                            <CardMedia
                              component="img"
                              src={img}
                              alt="cart images"
                              sx={{
                                width: isMediumScreen ? '61px' : '66px',
                                height: isMediumScreen ? '61px' : '75px'
                              }}
                            />
                          </Box>
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: isMediumScreen ? 0.5 : 1,
                              mb: isMediumScreen ? 3 : null
                            }}>
                            <Typography
                              component="p"
                              sx={{ fontSize: isMediumScreen ? '14px' : '20px', color: '#1C1C1C' }}>
                              {name}
                            </Typography>

                            <Box
                              sx={{
                                mb: isMediumScreen ? 2 : null
                              }}>
                              <Typography
                                component="p"
                                sx={{
                                  fontSize: isMediumScreen ? '12px' : '20px',
                                  color: '#8B96A5'
                                }}>
                                {desc}
                              </Typography>
                              <Typography
                                component="p"
                                sx={{
                                  fontSize: isMediumScreen ? '12px' : '20px',
                                  color: '#8B96A5'
                                }}>
                                {seller}
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: 'flex',
                                flexDirection: isMediumScreen ? 'row-reverse' : null,
                                gap: 1,
                                alignItems: 'center',
                                position: isMediumScreen ? 'absolute' : null,
                                bottom: 0,
                                left: '100px'
                              }}>
                              <AllButton text="Remove" onClick={() => handleDelete(id)} />
                              {isMediumScreen ? (
                                <IconButton
                                  onClick={() => handleFavourite(id)}
                                  id={`${id}`}
                                  sx={{
                                    width: '23px',
                                    height: '23px',
                                    border: '1px solid #DEE2E7',
                                    borderRadius: '3px',
                                    background: isMediumScreen ? '#FFFFFF' : null
                                  }}>
                                  {favorite ? (
                                    <FavoriteIcon
                                      sx={{
                                        width: '15px',
                                        height: '15px',
                                        color: '#0D6EFD'
                                      }}
                                    />
                                  ) : (
                                    <FavoriteBorderIcon
                                      sx={{ width: '15px', height: '15px', color: '#0D6EFD' }}
                                    />
                                  )}
                                </IconButton>
                              ) : (
                                <AllButton text="Save for later" />
                              )}
                            </Box>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: isMediumScreen ? 'row' : 'column',
                            gap: 1,
                            ml: 'auto'
                            // mb: isMediumScreen ? 5 : null
                          }}>
                          <Typography
                            component="p"
                            sx={{
                              ml: isMediumScreen ? null : 'auto',
                              fontSize: isMediumScreen ? '16px' : '20px',
                              fontWeight: 500,
                              color: '#1C1C1C',
                              position: isMediumScreen ? 'absolute' : null,
                              bottom: 0,
                              right: 0,
                              mb: isMediumScreen ? 0.8 : null
                            }}>
                            RS {amount}
                          </Typography>
                          <FormControl
                            sx={{
                              // minWidth: 120,
                              width: isMediumScreen ? '79px' : null,
                              background: '#FFFFFF',
                              position: isMediumScreen ? 'absolute' : null,
                              bottom: 0,
                              left: 0
                            }}
                            size="small">
                            <InputLabel
                              id="demo-select-small-label"
                              sx={{ fontSize: '16px', color: '#1C1C1C' }}>
                              Qty:
                            </InputLabel>
                            <Select
                              labelId="demo-select-small-label"
                              id="demo-select-small"
                              value={quantity}
                              label="Qty"
                              onChange={e => handleChange(e, id)}>
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                              <MenuItem value={3}>3</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </Typography>
                    </Box>
                    <Divider sx={{ background: '#DEE2E7', mt: isMediumScreen ? 2 : null }} />
                    {/* <Box
                      sx={{
                        width: '100%',
                        height: '1px',
                        background: '#DEE2E7',
                        mt: isMediumScreen ? 2 : null
                        // display: isSmallScreen ? 'none' : null
                      }}></Box> */}
                  </>
                )
              })}
              <Box sx={{ display: 'flex', mt: 2, mb: 3 }}>
                <Stack direction="row" spacing={2}>
                  <AllButton text="Back to shop" startIcon={<ArrowBackIcon />} />
                </Stack>
                {cartArrToDisplay.length !== 0 ? (
                  <AllButton onClick={handleDeleteAll} text="Remove all" />
                ) : null}
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} lg={4}>
            {/* CHECKOUT HERE */}
            {<Checkout />}
          </Grid>
        </Grid>

        <Grid container sx={{ mt: 4, display: isMediumScreen ? 'none' : null }}>
          <Grid item xs={12} lg={8} sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            {about.map((item, ind) => {
              const { icon, header, desc } = item
              return (
                <Typography
                  component="div"
                  key={`${header}-${ind}`}
                  sx={{ display: 'flex', gap: 1 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: '#DEE2E7'
                    }}>
                    <Icon
                      component={icon}
                      sx={{ width: '21px', height: '21px', color: '#8B96A5' }}
                    />
                  </Box>
                  <Box>
                    <Typography component="p" sx={{ fontSize: '16px', color: '#1C1C1C' }}>
                      {header}
                    </Typography>
                    <Typography component="p" sx={{ fontSize: '16px', color: '#A9ACB0' }}>
                      {desc}
                    </Typography>
                  </Box>
                </Typography>
              )
            })}
          </Grid>
        </Grid>

        <Grid
          container
          sx={{ display: isLargeScreen ? 'flex' : null, gap: isLargeScreen ? 4 : null }}>
          <Grid item xs={12} lg={2.5}>
            <Paper
              elevation={0}
              sx={{
                boxShadow:
                  '5px 5px 13px 0px #E6E6E6E5,-5px -5px 10px 0px #FFFFFFE5,5px -5px 10px 0px #E6E6E633,-5px 5px 10px 0px #E6E6E633,-1px -1px 2px 0px #E6E6E680 inset,1px 1px 2px 0px #FFFFFF4D inset'
              }}>
              <Box
                sx={{
                  px: 2,
                  py: 4,
                  display: isLargeScreen ? 'flex' : null,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap'
                }}>
                <Box>
                  <Typography
                    component="h4"
                    sx={{ fontSize: '20px', fontWeight: 600, color: '1C1C1C' }}>
                    Deals and offers
                  </Typography>
                  <Typography component="p" sx={{ fontSize: '16px', color: '#8B96A5' }}>
                    Electric items
                  </Typography>
                  <Typography
                    component="div"
                    sx={{
                      display: 'flex',
                      justifyContent: isLargeScreen ? null : 'space-between',
                      gap: isLargeScreen ? 2 : null,
                      mt: 3
                    }}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        width: '45px',
                        height: '50px',
                        borderRadius: '4px',
                        background: '#606060'
                      }}>
                      <Typography
                        component="p"
                        sx={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF' }}>
                        {days}
                      </Typography>
                      <Typography component="p" sx={{ fontSize: '12px', color: '#FFFFFF' }}>
                        Days
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',

                        width: '45px',
                        height: '50px',
                        borderRadius: '4px',
                        background: '#606060'
                      }}>
                      <Typography
                        component="p"
                        sx={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF' }}>
                        {hours}
                      </Typography>
                      <Typography component="p" sx={{ fontSize: '12px', color: '#FFFFFF' }}>
                        Hour
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',

                        width: '45px',
                        height: '50px',
                        borderRadius: '4px',
                        background: '#606060'
                      }}>
                      <Typography
                        component="p"
                        sx={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF' }}>
                        {minutes}
                      </Typography>
                      <Typography component="p" sx={{ fontSize: '12px', color: '#FFFFFF' }}>
                        Min
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',

                        width: '45px',
                        height: '50px',
                        borderRadius: '4px',
                        background: '#606060'
                      }}>
                      <Typography
                        component="p"
                        sx={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF' }}>
                        {seconds}
                      </Typography>
                      <Typography component="p" sx={{ fontSize: '12px', color: '#FFFFFF' }}>
                        Sec
                      </Typography>
                    </Box>
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: isLargeScreen ? 'flex' : null,
                    width: isSmallScreen ? '70%' : isLargeScreen ? '50%' : null,
                    justifyContent: 'space-between',
                    gap: isSmallScreen ? 5 : null
                  }}>
                  {techImage.map((items, ind) => {
                    const { img, info, badge, width, height } = items
                    return (
                      <Box sx={{ mt: 6 }}>
                        <Box>
                          <CardMedia
                            component="img"
                            src={img}
                            alt="techImages"
                            sx={{ width: `${width}`, height: `${height}`, m: 'auto' }}
                          />
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center'
                            }}>
                            <Typography component="p" sx={{ fontSize: '16px', color: '#1C1C1C' }}>
                              {info}
                            </Typography>
                            <Box
                              sx={{
                                width: '61px',
                                height: '28px',
                                borderRadius: '29px',
                                background: '#FFE3E3',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                              }}>
                              <Typography
                                component="p"
                                sx={{ fontSize: '14px', fontWeight: 500, color: '#EB001B' }}>
                                {badge}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    )
                  })}
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={isLargeScreen ? 12 : 4} sx={{}}>
            {isLargeScreen ? (
              <Cards cards={mycards} images={images} />
            ) : (
              <Cards cards={orderAndCartsCards} images={orderAndCartImages} />
            )}
          </Grid>
          <Grid item xs={5.5} sx={{}}>
            {isLargeScreen ? null : (
              <>
                <Cards cards={orderAndCartsCards2} />
                <Cards cards={orderAndCartsCards3} />
              </>
            )}
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}
export default MyCart
