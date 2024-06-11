import React, { useRef } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Box, useMediaQuery } from '@mui/material'
import { menuItems } from './NavbarList'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Searchicon from '../Buttons/Searchicon'
import AllButton from '../Buttons/AllButton'
import { Link } from 'react-router-dom'

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    selectedButtonRef.current = event.currentTarget
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const selectedButtonRef = useRef<(EventTarget & HTMLButtonElement) | null>(null)
  const selectedButton = selectedButtonRef.current?.textContent

  const isLargeScreen = useMediaQuery('(min-width:1200px)')
  // const handleMouseOver = () => {
  //   setAnchorEl(selectedButtonRef.current)
  // }
  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          // alignItems: 'center',
          position: 'relative',
          flexDirection: isLargeScreen ? 'row' : 'column',
          justifyContent: isLargeScreen ? 'space-between' : 'center',
          ml: isLargeScreen ? 6 : 0,
          mt: isLargeScreen ? 0 : 2
        }}>
        {menuItems.map((item, ind) => {
          return (
            // <Link to={item.title === 'Home' ? `/` : `${item.title}`}>
            <Button
              //  onMouseOver={handleMouseOver}
              ref={selectedButtonRef}
              key={ind}
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{
                color: '#000000',
                // ml: isLargeScreen ? 1 : 0,
                mb: isLargeScreen ? 0 : 2,
                width: isLargeScreen ? null : '150px',
                fontWeight: 600,
                pl: 1
              }}>
              {item.title}
              <ExpandMoreIcon />
            </Button>
            // </Link>
          )
        })}
        <Box
          sx={{
            width: isLargeScreen ? '300px' : null,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          {isLargeScreen && (
            <Link to="/login">
              <AllButton text="Login" />
            </Link>
          )}
          <Searchicon />
        </Box>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button'
          }}>
          {menuItems.map(item => {
            const title = item.title
            if (title === selectedButton) {
              return item.submenu?.map(submenuItems => {
                return (
                  <Box
                    sx={{
                      '& :nth-of-type(1)': {
                        textDecoration: 'none',
                        color: '#000000'
                      }
                    }}>
                    <Link to={submenuItems.title}>
                      <MenuItem sx={{ pl: 1 }} key={title} onClick={handleClose}>
                        {submenuItems.title}
                      </MenuItem>
                    </Link>
                  </Box>
                )
              })
            }
          })}
        </Menu>
      </Box>
    </>
  )
}
