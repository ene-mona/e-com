import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { topOptions } from './NavbarList'
import { useMediaQuery } from '@mui/material'

const TopOptions = () => {
  const isLargeScreen = useMediaQuery('(min-width:1200px)')

  let navItem = topOptions.map(item => {
    return (
      <ListItemButton
        key={item}
        sx={{
          fontSize: '16px',
          fontWeight: 500
        }}>
        <ListItemText primary={item} />
      </ListItemButton>
    )
  })
  return (
    <List sx={{ color: '#000000' }}>
      <ListItem
        disablePadding
        sx={{
          // display: isLargeScreen ? null : 'flex',
          flexDirection: isLargeScreen ? null : 'column',
          alignItems: isLargeScreen ? null : 'start'
        }}>
        {navItem}
      </ListItem>
    </List>
  )
}
export default TopOptions
