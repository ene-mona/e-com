import { Swiper, SwiperSlide } from 'swiper/react'
// import banner from '../../assets/Banner.png'

import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import { SwipeProps } from '../Types'
import { cardSwiper } from '../Cards/CardDetails'

const Swipe: React.FC<SwipeProps> = ({ swiperContent, renderSlideContent }) => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Swiper
      slidesPerView={
        swiperContent === cardSwiper ? (isSmallScreen ? 1 : isMediumScreen ? 2 : 3) : 'auto'
      }
      spaceBetween={swiperContent === cardSwiper ? 20 : 0}
      centeredSlides={swiperContent === cardSwiper ? false : true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      navigation={swiperContent === cardSwiper ? true : false}
      pagination={{
        // dynamicBullets: swiperContent ? true : false,
        clickable: true,
        ...(swiperContent === cardSwiper
          ? {
              renderBullet: function (index, className) {
                return `<span class="${className}" style="background-color: transparent;"></span>`
              }
            }
          : {
              renderBullet: function (index, className) {
                return `<span class="${className}" style="background-color: white;"></span>`
              }
            })
      }}
      loop={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      onSwiper={swiper => {
        swiper.wrapperEl.addEventListener('mouseenter', () => {
          swiper.navigation.prevEl.style.display = 'block'
          swiper.navigation.nextEl.style.display = 'block'
        })
        swiper.wrapperEl.addEventListener('mouseleave', () => {
          swiper.navigation.prevEl.style.display = 'none'
          swiper.navigation.nextEl.style.display = 'none'
        })
      }}
      // onSlideChange={handleSlideChange}
    >
      {swiperContent?.map(content => (
        <SwiperSlide key={swiperContent === cardSwiper ? content.cardNo : content.id}>
          {renderSlideContent && renderSlideContent(content)}
        </SwiperSlide>
      ))}
      {/* {SwiperGroup?.map((group, groupIndex) => (
        <SwiperSlide
          style={{
            display: 'flex'
          }}
          key={groupIndex}>
          {group.map((card, cardIndex) => {
            return (
              <Box
                sx={{
                  width: '100%',
                  mx: cardIndex === 1 && !isMediumScreen ? 3 : 0,
                  ml: cardIndex === 1 ? 3 : 0
                }}
                key={cardIndex}>
                {renderCard && renderCard(card)}
              </Box>
            )
          })}
        </SwiperSlide>
      ))} */}
    </Swiper>
  )
}

export default Swipe
