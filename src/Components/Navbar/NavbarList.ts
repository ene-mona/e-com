import Person2Icon from '@mui/icons-material/Person2'
import { MenuItem, Item } from '../Types'

import MessageIcon from '@mui/icons-material/Message'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

export const menuItems: MenuItem[] = [
  {
    title: 'Home',
    submenu: [
      {
        title: 'Order'
      }
    ]
  },
  {
    title: 'Electronics',
    submenu: [
      {
        title: 'web dev Elect'
      },
      {
        title: 'web design'
      }
    ]
  },
  {
    title: 'Fashion',
    submenu: [
      {
        title: 'web dev fash'
      },
      {
        title: 'web design'
      }
    ]
  },
  {
    title: 'Appliances',
    submenu: [
      {
        title: 'web dev app'
      },
      {
        title: 'web design'
      }
    ]
  },
  {
    title: 'Top offers',
    submenu: [
      {
        title: 'web dev offers'
      },
      {
        title: 'web design'
      }
    ]
  }
]

export const topOptions: string[] = ['Customer Service', 'Gift boxes', 'Today’s deals', 'Help']

export const sideMenuItems: Item[] = [
  {
    icon: Person2Icon,
    text: 'Profile'
  },
  {
    icon: MessageIcon,
    text: 'Messages'
  },
  {
    icon: FavoriteIcon,
    text: 'Orders'
  },
  {
    icon: ShoppingCartIcon,
    text: 'MyCart'
  }
]

// export default { menuItems, topOptions, sideMenuItems }
