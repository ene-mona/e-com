import SearchIcon from '@mui/icons-material/Search'
import IconButton from '@mui/material/IconButton'

import { useMediaQuery } from '@mui/material'

const Searchicon = () => {
  const isLargeScreen = useMediaQuery('(min-width:1200px)')

  return (
    <IconButton
      sx={{
        color: '#000000',
        cursor: 'pointer',
        // ml: isLargeScreen ? 'auto' : 0,
        position: isLargeScreen ? '' : 'absolute',
        top: 0,
        right: 0
      }}>
      <SearchIcon />
    </IconButton>
  )
}
export default Searchicon
