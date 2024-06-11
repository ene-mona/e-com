import { Box, Container, createTheme, ThemeProvider } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'
import SideMenu from './SideMenu'
import TopOptions from './TopOptions'
import { useMediaQuery } from '@mui/material'
import SecondaryDrawer from '../Drawers/SecondaryDrawer'

const SubNavbar = () => {
  const theme = createTheme({
    typography: {
      fontFamily: 'Inter, Arial, sans-serif'
    }
  })
  const isLargeScreen = useMediaQuery('(min-width:1200px)')

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          background: '#fff',
          height: '61px',
          display: 'flex',
          alignItems: 'center',
          pl: 4
        }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {isLargeScreen && <MenuIcon />}
          {!isLargeScreen && <SecondaryDrawer />}

          <Typography
            variant="h5"
            component="p"
            sx={{ fontSize: '16px', fontWeight: 500, whiteSpace: 'nowrap' }}>
            All categories
          </Typography>
        </Box>
        <Container sx={{ display: 'flex' }}>
          {isLargeScreen && <TopOptions />}
          {isLargeScreen && <SideMenu />}
        </Container>
      </Box>
    </ThemeProvider>
  )
}
export default SubNavbar
