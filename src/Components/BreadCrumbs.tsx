import { useLocation } from 'react-router-dom'
import { menuItems } from '../Components/Navbar/NavbarList'
import { useEffect, useState } from 'react'
import * as React from 'react'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
// import Link from '@mui/material/Link'
import { Link } from 'react-router-dom'

const BreadCrumbs = () => {
  const [firstPath, setFirstPath] = useState('')
  const location = useLocation()
  const path = location.pathname.replace(/\//g, '')
  useEffect(() => {
    menuItems.map(items =>
      items.submenu?.find(item => {
        if (item.title === path) {
          setFirstPath(items.title)
        }
      })
    )
  }, [path])

  //   return <>{`${firstPath} > ${path}`}</>

  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault()
  }

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs
        separator="›"
        aria-label="breadcrumb"
        sx={{
          '& :nth-of-type(1)': {
            textDecoration: 'none',
            color: '#8B96A5',
            fontSize: '16px',
            fontWeight: 400,
            '& :hover': {
              textDecoration: 'underline'
            }
          }
        }}>
        <Link color="inherit" to={`/`}>
          {firstPath}
        </Link>
        <Link color="inherit" to={`/${path}`}>
          {path}
        </Link>
      </Breadcrumbs>
    </div>
  )
}
export default BreadCrumbs
