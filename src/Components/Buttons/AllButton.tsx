import Button, { ButtonProps } from '@mui/material/Button'
import { useMediaQuery, SxProps } from '@mui/material'
import theme from '@/theme'
import { addAndPaymentArr } from '../../sections/Order/Payment/AddAndPaymentArr'

interface AllButtonProps extends ButtonProps {
  text: string
  sx?: SxProps
}

const AllButton: React.FC<AllButtonProps> = ({ text, sx, ...props }) => {
  const isLargeScreen = useMediaQuery('(min-width:1200px)')
  const isSmallScreen = useMediaQuery('(max-width:500px)')
  const isMediumScreen = useMediaQuery('(max-width:900px)')

  let buttonStylesLogin: SxProps = {
    background: '#C1C1C1',
    color: '#fff',
    width: isLargeScreen ? '100px' : '100%',
    '&:hover': {
      background: '#C1C1C1',
      color: '#000'
    }
  }
  let buttonStylesHero: SxProps = {
    fontSize: '16px',
    fontWeight: 500,
    background: '#FFFFFF',
    color: '#1C1C1C',
    textTransform: 'none',
    mt: 3,
    '&:hover': {
      background: '#C1C1C1',
      color: '#fff'
    }
  }
  if (text === 'Login') {
    sx = {
      ...sx,
      ...buttonStylesLogin
    }
  }
  if (text === 'Learn more') {
    sx = {
      ...sx,
      ...buttonStylesHero
    }
  }
  if (text === 'Buy-now') {
    sx = {
      fontWeight: 500,
      fontSize: '16px',
      color: '#FFFFFF',
      Padding: '0px, 20px, 0px, 20px',
      width: '100%',
      background: 'linear-gradient(to bottom, #127FFF, #0067FF)',
      textTransform: 'none'
    }
  }

  if (text === 'Add to cart') {
    sx = {
      fontWeight: 500,
      fontSize: '16px',
      color: '#0D6EFD',
      Padding: '0px, 20px, 0px, 20px',
      my: 2,
      width: '100%',
      background: 'white',
      textTransform: 'none',

      border: '1px solid #DEE2E7'
    }
  }
  if (text === 'Remove') {
    sx = {
      fontWeight: 500,
      fontSize: '13px',
      color: '#FA3434',
      textTransform: 'none',
      Padding: '0px, 20px, 0px, 20px',
      // my: 2,
      width: '86px',
      height: '38px',
      background: 'white',
      border: isMediumScreen ? 'none' : '1px solid #DEE2E7',
      borderRadius: '7px'
    }
  }
  if (text === 'Save for later') {
    sx = {
      fontWeight: 500,
      fontSize: '13px',
      color: '#0D6EFD',
      textTransform: 'none',
      Padding: '0px, 20px, 0px, 20px',
      // my: 2,
      width: '127px',
      height: '38px',
      background: 'white',
      borderRadius: '7px',
      border: '1px solid #DEE2E7'
    }
  }
  if (text === 'Rate Product') {
    sx = {
      background: '#3F65EA',
      color: '#FFFFFF',
      fontSize: '14px',
      // ml: isSmallScreen ? null : 'auto',
      width: isSmallScreen ? '140px' : null,
      height: isSmallScreen ? '32px' : null,
      textTransform: 'none',
      '&:hover': {
        background: 'transparent',
        border: '2px solid #3F65EA',
        color: '#000000'
      }
    }
  }
  if (text === 'Check') {
    sx = {
      color: '#0A74FF',
      fontWeight: 400,
      fontSize: isSmallScreen ? '15px' : '18px',
      border: 'none',
      textTransform: 'none',
      '&:hover': {
        color: '#000000'
      }
    }
  }
  if (text === 'Read more' || text === 'Read less') {
    sx = {
      color: '#0D6EFD',
      fontWeight: 500,
      fontSize: '19px',
      textTransform: 'none'
    }
  }
  if (text === 'View Details' || text === 'View Reviews') {
    sx = {
      ml: 'auto',
      fontSize: '15px',
      fontWeight: 400,
      color: '#0A74FF',
      textTransform: 'none'
    }
  }
  if (text === 'Back to shop') {
    sx = {
      // ml: 'auto',
      width: '159px',
      height: '40px',
      fontSize: '16px',
      fontWeight: 500,
      background: 'linear-gradient(to bottom, #127FFF, #0067FF)',
      color: '#FFFFFF',
      textTransform: 'none'
    }
  }
  if (text === 'Remove all') {
    sx = {
      ml: 'auto',
      width: '115px',
      height: '40px',
      fontSize: '16px',
      fontWeight: 500,
      border: '1px solid #DEE2E7',
      color: '#0D6EFD',
      textTransform: 'none'
    }
  }
  if (text === 'Apply') {
    sx = {
      ml: 'auto',
      width: '108px',
      height: '56px',
      fontSize: '16px',
      fontWeight: 500,
      border: '1px solid #DEE2E7',
      color: '#0D6EFD',
      textTransform: 'none'
    }
  }
  if (text === 'Checkout') {
    sx = {
      width: '100%',
      background: '#00B517',
      fontSize: '18px',
      fontWeight: 500,
      // border: '1px solid #DEE2E7',
      borderRadius: '10px',
      color: '#FFFFFF',
      textTransform: 'none',
      '&:hover': {
        border: '1px solid #00B517',
        color: '#00B517'
      }
    }
  }
  if (text === 'EDIT') {
    sx = {
      ml: 'auto',
      fontSize: isSmallScreen ? '14px' : '18px',
      fontWeight: 500,
      color: '#1877F2',
      textTransform: 'none',
      position: isSmallScreen ? null : 'absolute',
      top: 0,
      right: 0
      // bottom: isSmallScreen ? 0 : null

      // '&:hover': {
      //   border: '1px solid #00B517',
      //   color: '#00B517'
      // }
    }
  }
  if (text === 'DELIVERY HERE') {
    sx = {
      background: '#0E79FF',
      fontSize: isSmallScreen ? '14px' : '18px',
      fontWeight: 500,
      color: '#FFF',
      fontFamily: 'Poppins',
      textTransform: 'none',
      '&:hover': {
        border: '1px solid #0E79FF',
        color: '#0E79FF',
        background: 'transparent'
      }
    }
  }

  if (text === 'Add-New' || text === 'Add-New card') {
    sx = {
      color: '#FFF',
      fontSize: isSmallScreen ? '12px' : '14px',
      fontFamily: 'Poppins',
      fontWeight: 400,
      background: '#0E79FF',
      textTransform: 'none',
      '&:hover': {
        border: '1px solid #0E79FF',
        color: '#0E79FF',
        background: 'transparent'
      }
    }
  }
  if (text === 'Continue') {
    sx = {
      color: '#FFF',
      fontSize: '14px',
      fontFamily: 'Poppins',
      fontWeight: 400,
      background: '#0E79FF',
      textTransform: 'none',
      '&:hover': {
        border: '1px solid #0E79FF',
        color: '#0E79FF',
        background: 'transparent'
      }
    }
  }

  return (
    <Button {...props} sx={sx}>
      {text}
    </Button>
  )
}

export default AllButton
