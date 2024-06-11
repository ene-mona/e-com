import { Box, Typography } from '@mui/material'
import { ListItemButton } from '@mui/material'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import { sideMenuItems } from './NavbarList'
import { useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'

const SideMenu = () => {
  const isLargeScreen = useMediaQuery('(min-width:1200px)')

  let navigation = sideMenuItems.map((item, ind) => {
    const { icon: IconComponent, text } = item

    return (
      <Box sx={{ '& > :first-of-type': { textDecoration: 'none', color: '#8B96A5' } }}>
        <Link to={text}>
          <ListItemButton
            sx={{
              display: 'flex',
              flexDirection: isLargeScreen ? 'column' : 'row',
              justifyContent: 'start',
              columnGap: 2,
              mb: isLargeScreen ? 0 : 3
            }}>
            <IconComponent />
            <Typography component="p" sx={{ textDecoration: 'none', fontSize: '14px' }}>
              {text}
            </Typography>
          </ListItemButton>
        </Link>
      </Box>
    )
  })
  console.log(navigation)
  return (
    <Box
      sx={{
        // width: '300px',
        // color: '#8B96A5',
        // fontSize: '9.36px',
        ml: isLargeScreen ? 'auto' : null,
        my: isLargeScreen ? 0 : 8
      }}>
      <BottomNavigation
        sx={{
          //   display: isLargeScreen ? null : 'flex',
          flexDirection: isLargeScreen ? 'row' : 'column',
          alignItems: isLargeScreen ? null : 'start'
        }}
        showLabels>
        {navigation}
      </BottomNavigation>
    </Box>
  )
}
export default SideMenu
