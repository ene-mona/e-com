import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Box, createTheme, ThemeProvider } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import CustomizedMenus from './CustomizedMenus'
import PrimaryDrawer from '../Drawers/PrimaryDrawer'

const Navbar = () => {
  const theme = createTheme({
    typography: {
      fontFamily: 'Inter, Arial, sans-serif'
    }
  })
  const isLargeScreen = useMediaQuery('(min-width:1200px)')
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppBar position="static" elevation={0} sx={{ background: '#f8f8f8', py: '10px' }}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}>
            <Typography
              variant="h1"
              component="p"
              sx={{ fontSize: '44px', color: '#000', fontWeight: 700 }}>
              LOGO
            </Typography>
            {isLargeScreen && <CustomizedMenus />}
            {!isLargeScreen && <PrimaryDrawer />}
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  )
}
export default Navbar
