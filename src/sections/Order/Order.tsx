import {
  Box,
  Button,
  CardMedia,
  Container,
  IconButton,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery
} from '@mui/material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import CheckIcon from '@mui/icons-material/Check'
import StarIcon from '@mui/icons-material/Star'
import MessageIcon from '@mui/icons-material/Message'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import Divider from '@mui/material/Divider'
import img from '../../assets/images/order/image 34.png'
import { useEffect, useRef, useState } from 'react'
import { scroller } from 'react-scroll'
import {
  modernShoesProperties1,
  modernShoesProperties2,
  modernShoesPropertiesSm,
  order
} from './OrderArray'
import AllButton from '../../Components/Buttons/AllButton'
import { Link } from 'react-router-dom'
import BreadCrumbs from '../../Components/BreadCrumbs'

import ProductDetails from './ProductDetails'
import Reviews from './Reviews'

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
const Order = () => {
  const myRef = useRef<HTMLDivElement>(null)
  const [displayText, setDisplayText] = useState('')
  const [displayImage, setDisplayImage] = useState('')
  const [clickedIndex, setClickedIndex] = useState(-1)
  const [textTruncate, setTextTruncate] = useState(false)
  const [favorite, setFavorite] = useState(false)

  const [ProductDetailsOrReview, setProductDetailsOrReview] = useState(true)

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))

  const isLargeScreen = useMediaQuery(theme.breakpoints.down('lg'))

  let text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate adipisci perspiciatis quos ratione nobis quibusdam rem odio quidem harum facere? Amet magni tempore aliquid in repellendus eaque optio eius totam facere error aspernatur, architecto consectetur sapiente esse, culpa assumenda mollitia omnis ad maxime, quo nam ut. Repellat aspernatur ratione eius.'

  let lengthOfText = 100
  const textSlice = text?.slice(0, lengthOfText)

  useEffect(() => {
    setDisplayText(text.length < lengthOfText ? text : `${textSlice}...`)
    setDisplayImage(order[0].img)
  }, [])

  const handleImage = (ind: number) => {
    setDisplayImage(order[ind].img)
    setClickedIndex(ind)
  }

  const handleText = () => {
    textTruncate === true
      ? setDisplayText(text.length < lengthOfText ? text : `${textSlice}...`)
      : setDisplayText(text)
    setTextTruncate(!textTruncate)
  }

  const handleProductDetailsAndReviews = () => {
    setProductDetailsOrReview(!ProductDetailsOrReview)
    // scrollToDiv()
  }
  const handleReviews = () => {
    setProductDetailsOrReview(false)
    scrollToDiv()
  }
  const handleImageClickForward = () => {
    const currentIndex = order.findIndex(item => item.img === displayImage)

    currentIndex === order.length - 1
      ? setDisplayImage(order[0].img)
      : setDisplayImage(order[currentIndex + 1].img)
  }

  const handleImageClickBack = () => {
    const currentIndex = order.findIndex(item => item.img === displayImage)
    console.log(currentIndex)
    currentIndex === 0
      ? setDisplayImage(order[order.length - 1].img)
      : setDisplayImage(order[currentIndex - 1].img)
  }
  const handleFavorite = () => {
    setFavorite(!favorite)
  }
  const scrollToDiv = () => {
    myRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const propertiesArray = isSmallScreen ? modernShoesPropertiesSm : modernShoesProperties1

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ my: 3, ml: 3 }}>
        <BreadCrumbs />
      </Box>
      <Typography component="div" sx={{ mx: isSmallScreen ? 0 : 4 }}>
        <Grid sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <Paper
            elevation={isSmallScreen ? 0 : 1}
            sx={{
              // background: 'white',
              px: 2,
              py: 3
              // mb: isSmallScreen ? 0 : 5
              // border: '1.24px solid #DEE2E7'
            }}>
            <Box sx={{ borderRadius: '3px' }}>
              <Grid container spacing={isMediumScreen ? 0 : 2}>
                <Grid item md={6} lg={4.1} sx={{ width: '100%' }}>
                  <Paper
                    elevation={0}
                    sx={{
                      border: isSmallScreen ? null : 'solid 1.24px #DEE2E7',
                      position: 'relative'
                    }}>
                    <CardMedia
                      component="img"
                      src={displayImage}
                      alt={`Order-images`}
                      sx={{
                        // width: '100%',
                        height: '426px',
                        p: 2,
                        px: isSmallScreen ? 0 : null,
                        borderRadius: '5px'
                      }}
                    />
                    {isSmallScreen && (
                      <Box
                        sx={{
                          width: '71px',
                          height: '34p',
                          borderRadius: '36px',
                          background: 'rgba(0, 0, 0, 0.25)',
                          position: 'absolute',
                          bottom: 0,
                          right: 0
                        }}>
                        <IconButton href="" onClick={handleImageClickBack}>
                          <ArrowBackIcon
                            sx={{
                              width: '19px',
                              height: '19px',
                              color: 'white'
                            }}
                          />
                        </IconButton>
                        <IconButton href="" onClick={handleImageClickForward}>
                          <ArrowForwardIcon
                            sx={{
                              width: '19px',
                              height: '19px',
                              color: 'white'
                            }}
                          />
                        </IconButton>
                      </Box>
                    )}
                  </Paper>
                  <Box
                    sx={{
                      display: 'flex',
                      // flexWrap: 'wrap',
                      my: 2,
                      width: '100%',
                      // gap: 2,
                      justifyContent: 'space-between',
                      cursor: 'pointer'
                      // overflowY: isSmallScreen ? 'scroll' : null
                    }}>
                    {order.map((item, ind) => {
                      const { img } = item
                      return (
                        <CardMedia
                          component="img"
                          src={img}
                          alt={`Order-images`}
                          sx={{
                            width: '68px',
                            height: '68px',
                            p: 0.5,

                            borderRadius: '5px',
                            border:
                              img === displayImage ? 'solid 2px #505050' : 'solid 1.24px #DEE2E7',
                            display: isSmallScreen ? 'none' : null
                          }}
                          onClick={() => handleImage(ind)}
                        />
                      )
                    })}
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={4.7}>
                  <Typography component="div">
                    <Box
                      sx={{
                        color: '#00B517',
                        display: isSmallScreen ? 'none' : 'flex',
                        alignItems: 'center'
                      }}>
                      <CheckIcon sx={{ width: '30px', height: '30px' }} />
                      <Typography
                        component="p"
                        sx={{
                          fontWeight: 400,
                          fontSize: '18px'
                        }}>
                        In stock
                      </Typography>
                    </Box>
                    <Typography
                      component="div"
                      sx={{
                        display: isSmallScreen ? 'flex' : null,
                        flexDirection: 'column-reverse',
                        gap: 2
                      }}>
                      <Box>
                        <Typography
                          component="p"
                          sx={{
                            color: '#1C1C1C',
                            fontSize: isSmallScreen ? '19px' : '25px',
                            fontWeight: 600
                          }}>
                          AIR MAX 270 Running Shoes For Men (RED)
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                          <StarIcon sx={{ color: '#FF9017', width: '20px', height: '19px' }} />
                          <StarIcon sx={{ color: '#FF9017', width: '20px', height: '19px' }} />
                          <StarIcon sx={{ color: '#FF9017', width: '20px', height: '19px' }} />
                          <StarIcon sx={{ color: '#FF9017', width: '20px', height: '19px' }} />
                          <StarIcon sx={{ color: '#D4CDC5', width: '20px', height: '19px' }} />
                          <Typography
                            component="p"
                            sx={{
                              display: isSmallScreen ? 'none' : null,
                              color: '#FF9017',
                              fontSize: '18px',
                              fontWeight: 400,
                              ml: 1
                            }}>
                            9.3
                          </Typography>
                        </Typography>
                        <Box
                          sx={{
                            width: '7px',
                            height: '7px',
                            borderRadius: '50%',
                            background: '#DBDBDB',
                            mx: 1.3,
                            display: isSmallScreen ? 'none' : null
                          }}></Box>
                        <Button
                          onClick={handleReviews}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.3,
                            ml: isSmallScreen ? 3 : null
                          }}>
                          <MessageIcon
                            sx={{
                              color: '#FF9017',
                              width: isSmallScreen ? '17px' : '25px',
                              height: isSmallScreen ? '17px' : '25px'
                            }}
                          />
                          <Typography
                            component="p"
                            sx={{
                              color: '#FF9017',
                              fontSize: isSmallScreen ? '15px' : '18px',
                              fontWeight: 400
                            }}>
                            32 reviews
                          </Typography>
                        </Button>
                        <Box
                          sx={{
                            width: '7px',
                            height: '7px',
                            borderRadius: '50%',
                            background: '#DBDBDB',
                            mx: 1.3,
                            display: isSmallScreen ? 'none' : null
                          }}></Box>
                        <Box
                          sx={{
                            display: isSmallScreen ? 'none' : 'flex',
                            alignItems: 'center',
                            gap: 1.3
                          }}>
                          <ShoppingBasketIcon
                            sx={{ color: '#8B96A5', width: '25px', height: '25px' }}
                          />
                          <Typography
                            component="p"
                            sx={{ color: '#787A80', fontSize: '18px', fontWeight: 400 }}>
                            154 sold
                          </Typography>
                        </Box>
                      </Box>
                    </Typography>

                    <Typography
                      component="h1"
                      sx={{
                        fontSize: isSmallScreen ? '30px' : '44px',
                        fontWeight: 'bold',
                        color: '#000000'
                      }}>
                      RS 1450
                    </Typography>
                    <Box
                      sx={{
                        display: isSmallScreen ? 'flex' : 'none',
                        gap: 2,
                        my: 2
                      }}>
                      <Link to="/AddPayment" style={{ width: '100%' }}>
                        <AllButton text="Buy-now" />
                      </Link>
                      <Paper
                        sx={{
                          width: '48px',
                          // height: '48px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                        <IconButton onClick={handleFavorite}>
                          {favorite ? (
                            <FavoriteIcon
                              sx={{
                                // border: '1px solid #DEE2E7',
                                width: '24px',
                                height: '24px',
                                color: '#0D6EFD'
                              }}
                            />
                          ) : (
                            <FavoriteBorderIcon
                              sx={{
                                // border: '1px solid #DEE2E7',
                                width: '24px',
                                height: '24px',
                                color: '#0D6EFD'
                              }}
                            />
                          )}
                        </IconButton>
                      </Paper>
                    </Box>
                    <Typography
                      component="p"
                      sx={{
                        display: isSmallScreen ? 'none' : null,
                        '& > :first-of-type': {
                          fontSize: '18px',
                          fontWeight: 400,
                          color: '#3F65EA',
                          textDecoration: 'none'
                        }
                      }}>
                      <Link to="">Be the first to Review this product</Link>
                    </Typography>
                    <Divider
                      sx={{ display: isSmallScreen ? 'none' : null, background: '#E0E0E0', mb: 2 }}
                    />
                    <Typography
                      component="div"
                      sx={{ display: 'flex', flexDirection: 'column', gap: isSmallScreen ? 2 : 4 }}>
                      {propertiesArray.map((properties, ind) => {
                        const { name, value } = properties
                        return (
                          <Box
                            sx={{
                              display: 'flex',

                              position: 'relative'
                            }}>
                            <Typography
                              component="p"
                              sx={{
                                display: 'flex',
                                fontSize: '18px',
                                fontWeight: 400,
                                color: '#8B96A5'
                              }}>
                              {name}
                            </Typography>
                            <Typography
                              component="p"
                              sx={{
                                color: '#505050',
                                fontSize: '18px',
                                fontWeight: 400,
                                position: 'absolute',
                                left: isSmallScreen ? '150px' : '200px'
                              }}>
                              {value}
                            </Typography>
                          </Box>
                        )
                      })}
                      <Box sx={{ display: isSmallScreen ? null : 'none' }}>
                        <Typography
                          component="p"
                          // ref={myRef}
                          sx={{
                            color: '#505050',
                            fontSize: '19px',
                            fontWeight: 400,
                            lineHeight: '26px'
                          }}>
                          {displayText}
                        </Typography>
                        <Box
                          sx={{
                            display: 'flex',
                            mt: 1
                          }}>
                          {text.length > lengthOfText && (
                            <>
                              {textTruncate === true ? (
                                <AllButton onClick={handleText} text="Read less" />
                              ) : (
                                <AllButton onClick={handleText} text="Read more" />
                              )}
                            </>
                          )}

                          {ProductDetailsOrReview ? (
                            <AllButton
                              onClick={handleProductDetailsAndReviews}
                              text="View Reviews"
                            />
                          ) : (
                            <AllButton
                              onClick={handleProductDetailsAndReviews}
                              text="View Details"
                            />
                          )}
                        </Box>
                      </Box>
                    </Typography>
                    <Divider
                      sx={{ display: isSmallScreen ? 'none' : null, background: '#E0E0E0', mb: 2 }}
                    />
                    <Typography
                      component="div"
                      sx={{
                        display: isSmallScreen ? 'none' : 'flex',
                        flexDirection: 'column',
                        gap: 4
                      }}>
                      {modernShoesProperties2.map((properties, ind) => {
                        const { name, value } = properties
                        return (
                          <Box
                            sx={{
                              display: 'flex',

                              position: 'relative'
                            }}>
                            <Typography
                              component="p"
                              sx={{
                                display: 'flex',
                                fontSize: '18px',
                                fontWeight: 400,
                                color: '#8B96A5'
                              }}>
                              {name}
                            </Typography>
                            <Typography
                              component="p"
                              sx={{
                                color: '#505050',
                                fontSize: '18px',
                                fontWeight: 400,
                                position: 'absolute',
                                left: '200px'
                              }}>
                              {value}
                            </Typography>
                          </Box>
                        )
                      })}
                    </Typography>
                    <Divider sx={{ background: '#E0E0E0', my: 2 }} />
                  </Typography>
                </Grid>
                <Grid item xs={12} lg={3.2}>
                  <Paper elevation={isSmallScreen ? 0 : 2} sx={{ px: isSmallScreen ? 0 : 2 }}>
                    <Typography
                      component="div"
                      sx={{
                        display: isSmallScreen ? 'flex' : null,
                        flexDirection: 'column-reverse'
                      }}>
                      <Box
                        sx={
                          {
                            // background: isSmallScreen ? '#f8f8f8' : null
                          }
                        }>
                        <Typography
                          component="p"
                          sx={{
                            color: '#1C1C1C',
                            fontWeight: 400,
                            fontSize: isSmallScreen ? '15px' : '18px'
                          }}>
                          Delivery
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'end', gap: 2, mb: 3, mt: 1 }}>
                          <Box
                            component="form"
                            sx={{
                              '& > :not(style)': {},
                              '& > :first-of-type': {
                                color: '#C9C9C9',
                                // borderBottom: '2px solid #C9C9C9',
                                fontWeight: 400,
                                fontSize: isSmallScreen ? '15px' : '18px'
                              }
                            }}
                            noValidate
                            autoComplete="off">
                            <TextField
                              id="standard-basic"
                              label="Enter delivery code"
                              variant="standard"
                            />
                          </Box>

                          <AllButton text="Check" />
                        </Box>
                      </Box>
                      <Divider sx={{ background: '#E0E0E0', my: 2 }} />
                      <Box
                        component="p"
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 1
                        }}>
                        <Box sx={{ display: isSmallScreen ? 'flex' : null, gap: 5 }}>
                          <Typography
                            component="p"
                            sx={{
                              '& > :first-of-type': {
                                fontWeight: 400,
                                color: '#1ABA00',
                                textDecoration: 'none',
                                fontSize: isSmallScreen ? '13px' : '18px'
                              }
                            }}>
                            <Link to="">Bank Offer</Link>
                          </Typography>
                          <Typography
                            component="p"
                            sx={{
                              '& > :first-of-type': {
                                color: '#1ABA00',
                                textDecoration: 'none',
                                fontWeight: 400,
                                fontSize: isSmallScreen ? '15px' : '18px'
                              }
                            }}>
                            <Link to="">Credit card offer</Link>
                          </Typography>
                        </Box>
                        <Typography
                          component="p"
                          sx={{
                            '& > :first-of-type': {
                              color: '#1ABA00',
                              textDecoration: 'none',
                              fontWeight: 400,
                              fontSize: isSmallScreen ? '15px' : '18px'
                            }
                          }}>
                          <Link to="">10% cash back payment via Gpay</Link>
                        </Typography>
                      </Box>
                      <Box sx={{ display: isSmallScreen ? 'none' : null }}>
                        <Link to="/AddPayment">
                          <AllButton text="Buy-now" />
                        </Link>
                        <Link to="">
                          <AllButton text="Add to cart" />
                        </Link>
                      </Box>
                    </Typography>
                  </Paper>
                  <Button
                    component="div"
                    onClick={handleFavorite}
                    sx={{
                      display: isSmallScreen ? 'none' : 'flex',
                      justifyContent: 'center',
                      mt: 2.5,
                      gap: 1
                    }}>
                    {favorite ? (
                      <FavoriteIcon sx={{ color: '#0D6EFD', width: '24px', height: '24px' }} />
                    ) : (
                      <FavoriteBorderIcon
                        sx={{ color: '#0D6EFD', width: '24px', height: '24px' }}
                      />
                    )}
                    <Typography
                      component="p"
                      sx={{
                        color: '#0D6EFD',
                        fontWeight: 500,
                        fontSize: '18px'
                      }}>
                      Save for later
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
          <Box ref={myRef}>
            <Paper
              elevation={isSmallScreen || !ProductDetailsOrReview ? 0 : 1}
              sx={{
                pb: 2,
                background: isSmallScreen || !ProductDetailsOrReview ? '#f8f8f8' : null
              }}>
              <Box
                sx={{
                  display: isSmallScreen ? 'none' : 'flex',

                  gap: 5,
                  px: 5,
                  py: 1
                }}>
                <Button
                  onClick={handleProductDetailsAndReviews}
                  sx={{
                    fontSize: '16px',
                    fontWeight: 500,
                    color: ProductDetailsOrReview ? '#3F65EA' : '#8B96A5'
                  }}>
                  Product Details
                </Button>

                <Button
                  onClick={handleProductDetailsAndReviews}
                  sx={{
                    fontSize: '16px',
                    fontWeight: 500,
                    color: !ProductDetailsOrReview ? '#3F65EA' : '#8B96A5'
                  }}>
                  Reviews
                </Button>
              </Box>
              <Divider sx={{ background: '#D7D7D7', display: isSmallScreen ? 'none' : null }} />
            </Paper>

            <Box>{ProductDetailsOrReview ? <ProductDetails /> : <Reviews />}</Box>
          </Box>
        </Grid>
      </Typography>
    </ThemeProvider>
  )
}
export default Order
