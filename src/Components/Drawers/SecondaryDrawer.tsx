import Drawer from '@mui/material/Drawer'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { useMediaQuery } from '@mui/material'
import TopOptions from '../Navbar/TopOptions'

const SecondaryDrawer = () => {
  const [open, setOpen] = useState(false)

  const isLargeScreen = useMediaQuery('(max-width:1200px)')

  return (
    <>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        sx={
          {
            // overflowX: 'hidden'
          }
        }>
        <TopOptions />
      </Drawer>
      {isLargeScreen && (
        <MenuIcon
          onClick={() => setOpen(!open)}
          sx={{ ml: 'auto', color: '#000000', cursor: 'pointer' }}
        />
      )}
    </>
  )
}
export default SecondaryDrawer
