import { Box, Button, CardMedia, Typography, useMediaQuery, createTheme } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import StarIcon from '@mui/icons-material/Star'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone'
import { review } from './OrderArray'
import CardsForOrder from './OrderCards/CardsForOrder'
import Grid from '@mui/material/Grid'

import { useState } from 'react'
// import AllButton from '..//Components/Buttons/AllButton'
import AllButton from '../../Components/Buttons/AllButton'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1300,
      xl: 1536
    }
  }
  //   typography: {
  //     fontFamily: 'Poppins'
  //   }
})
// interface ProductDetailsOrReviewProps {
//   ProductDetailsOrReview: boolean
// }
const Reviews = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('lg'))

  const [likesAndDislikes, setlikesAndDislikes] = useState(true)

  const handleAddLikes = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const searchId = review.find(
      item => item.id === parseInt(e.currentTarget.parentElement?.parentElement?.id ?? '')
    )

    searchId ? searchId.numberOfLikes++ : 0
    setlikesAndDislikes(!likesAndDislikes)
  }
  const handleDisLikes = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const searchId = review.find(
      item => item.id === parseInt(e.currentTarget.parentElement?.parentElement?.id ?? '')
    )
    searchId ? searchId.numberOfDisLikes++ : 0
    setlikesAndDislikes(!likesAndDislikes)
  }

  return (
    <Box>
      <Grid container spacing={2} sx={{}}>
        <Grid item xs={isMediumScreen ? 12 : 8}>
          <Box sx={{ px: isSmallScreen ? 2 : 5 }}>
            <Typography
              component="div"
              sx={{
                display: 'flex',
                //   flexDirection: isSmallScreen ? 'column' : 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: isSmallScreen ? null : 'center',
                gap: isSmallScreen ? 2 : 4,
                mt: 4,
                mb: isSmallScreen ? 4 : 8,
                position: 'relative'
              }}>
              <Typography
                component="p"
                sx={{ fontWeight: 500, fontSize: '16px', color: '#3F65EA' }}>
                Ratings & Reviews
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography
                  component="div"
                  sx={{
                    color: '#FFFFFF',
                    background: '#00B517',
                    width: '56px',
                    height: '30px',

                    borderRadius: '17px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                  <Typography component="p" sx={{ fontWeight: 500, fontSize: '14px' }}>
                    4.5
                  </Typography>
                  <StarIcon
                    sx={{
                      width: isSmallScreen ? '14px' : '25px',
                      height: isSmallScreen ? '13px' : '22px'
                    }}
                  />
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontWeight: 500,
                    fontSize: '14px',
                    color: '#000000'
                  }}>
                  75 ratings and 18 reviews
                </Typography>
              </Box>
              <AllButton text="Rate Product" />
              {/* <Button
                sx={{
                  background: '#3F65EA',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  // ml: isSmallScreen ? null : 'auto',
                  width: isSmallScreen ? '140px' : null,
                  height: isSmallScreen ? '32px' : null
                  // position: isSmallScreen ? 'absolute' : null,
                  // top: 0,
                  // right: 0
                }}>
                Rate Product
              </Button> */}
            </Typography>
            <Box
              sx={{
                width: '100%',
                height: '1px',
                background: '#D7D7D7',
                my: 2,
                display: isSmallScreen ? null : 'none'
              }}></Box>

            {review.map((items, ind) => {
              const {
                rating,
                coment1,
                coment2,
                text1,
                text2,
                date,
                image,
                numberOfLikes,
                numberOfDisLikes
              } = items
              return (
                <Box key={ind}>
                  <Typography component="div">
                    <Box sx={{ display: 'flex', gap: 3 }}>
                      <Typography
                        component="div"
                        sx={{
                          color: '#FFFFFF',
                          background: '#00B517',
                          width: '39px',
                          height: '21px',

                          borderRadius: '15px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}>
                        <Typography component="p" sx={{ fontWeight: 500, fontSize: '12px' }}>
                          {rating}
                        </Typography>
                        <StarIcon sx={{ fontSize: '13px' }} />
                      </Typography>
                      <Typography
                        component="p"
                        sx={{ fontWeight: 500, fontSize: '15px', color: '#000000' }}>
                        {coment1}
                      </Typography>
                    </Box>
                    <Typography
                      component="p"
                      sx={{ fontWeight: 300, fontSize: '15px', color: '#000000', mt: 1 }}>
                      {coment2}
                    </Typography>
                    <CardMedia
                      component="img"
                      alt="shoes"
                      src={image}
                      sx={{
                        width: '43px',
                        height: '41px',
                        border: '2px solid #505050',
                        borderRadius: '1.56px'
                      }}
                    />
                    <Typography
                      component="div"
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        //   flexDirection: isSmallScreen ? 'column' : 'row',
                        justifyContent: 'space-between',
                        alignItems: isSmallScreen ? null : 'center',
                        mt: 1
                      }}>
                      <Box>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                          <Typography
                            component="p"
                            sx={{ fontWeight: 300, fontSize: '13px', color: '#777777' }}>
                            {text1}
                          </Typography>
                          <Typography
                            component="p"
                            sx={{ fontWeight: 300, fontSize: '13px', color: '#777777' }}>
                            {date}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                          <CheckCircleIcon
                            sx={{ width: '17px', height: '17px', color: '#979797' }}
                          />
                          <Typography
                            component="p"
                            sx={{ fontWeight: 500, fontSize: '15px', color: '#777777' }}>
                            {text2}
                          </Typography>
                        </Box>
                      </Box>

                      <Typography
                        id={`${ind + 1}`}
                        component="div"
                        sx={{ display: 'flex', gap: 3, ml: 'auto' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <IconButton href="" onClick={handleAddLikes}>
                            <ThumbUpIcon
                              sx={{
                                width: '20px',
                                height: '20px',
                                color: '#979797'
                                // cursor: 'pointer'
                              }}
                            />
                          </IconButton>

                          <Typography
                            component="p"
                            sx={{ fontWeight: 500, fontSize: '13px', color: '#979797' }}>
                            {numberOfLikes}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <IconButton href="" onClick={handleDisLikes}>
                            <ThumbDownIcon
                              sx={{
                                width: '20px',
                                height: '20px',
                                color: '#979797',
                                cursor: 'pointer'
                              }}
                            />
                          </IconButton>

                          <Typography
                            component="p"
                            sx={{ fontWeight: 500, fontSize: '13px', color: '#979797' }}>
                            {numberOfDisLikes}
                          </Typography>
                        </Box>
                        <IconButton>
                          <MoreVertTwoToneIcon sx={{ color: '#979797', cursor: 'pointer' }} />
                        </IconButton>
                      </Typography>
                    </Typography>
                  </Typography>
                  <Box
                    sx={{
                      width: '100%',
                      height: '1px',
                      background: '#D7D7D7',
                      my: 2
                    }}></Box>
                </Box>
              )
            })}
          </Box>
        </Grid>
        <Grid item xs={4}>
          <CardsForOrder isReview={true} />
        </Grid>
      </Grid>
    </Box>
  )
}
export default Reviews
