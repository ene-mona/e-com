import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

// ADD REMOVE OR UPDTE COLORS AS PER YOUR NEEDS
export enum ThemeColor {
  ORANGE = '#ED6C50',
  BURNT_ORANGE = '#E7392B',
  BLACK = '#000000',
  WHITE = '#FFFFFF',
  GREY = '#F1F1F1',
  DARK_GREY = '#878787',
  GREY_LIGHT = '#CACACA',
  COOL_GREY = '#E6E6E6',
  BLUE = '#6397D3'
}

const theme = createTheme({
  palette: {
    primary: {
      main: ThemeColor.BLUE
    },
    common: {
      black: ThemeColor.BLACK,
      white: ThemeColor.WHITE
    },
    text: {
      primary: ThemeColor.BLACK,
      secondary: ThemeColor.DARK_GREY,
    },
    divider: 'rgba(0,0,0,0.1)',

    background: {
      default: ThemeColor.WHITE
    },
    error: {
      main: red.A700
      
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  zIndex: {
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  },

  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    h1: {
      fontWeight: 'bold',
      fontSize: '3.5rem'
    },
    h2: {
      fontWeight: 'bold',
      fontSize: '2rem'
    },
    h3: {
      fontWeight: 'bold',
      fontSize: '1.5rem'
    },
    h4: {
      fontWeight: 'normal',
      fontSize: '1rem'
    },
    body1: {
      fontWeight: 'normal',
      fontSize: '0.9rem'
    }
  }
  
})

export default theme
