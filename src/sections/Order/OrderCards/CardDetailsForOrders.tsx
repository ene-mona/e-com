import AppleIcon from '@mui/icons-material/Apple'
import img1 from '../../../assets/images/order/OrderCards/Rectangle 1.png'
import img2 from '../../../assets/images/order/OrderCards/Mask group1.png'
import img3 from '../../../assets/images/order/OrderCards/image 9.png'

import img4 from '../../../assets/images/order/OrderCards/Rectangle 2.png'
import img5 from '../../../assets/images/order/OrderCards/Mask group2.png'
import img6 from '../../../assets/images/order/OrderCards/image 9-1.png'

import img7 from '../../../assets/images/order/OrderCards/Rectangle 3.png'
import img8 from '../../../assets/images/order/OrderCards/Mask group3.png'
import img9 from '../../../assets/images/order/OrderCards/image 9-2.png'

import { CardDetailsForOrderdetails, CardDetailsForOrderdetails1 } from '@/Components/Types'

export const cardsDetails: CardDetailsForOrderdetails[] = [
  {
    img1: img1,
    img2: img2,
    img3: img3,
    icon: AppleIcon,
    brand: 'IPHONE',
    Discount: 'UP to 80% OFF',
    backGroundColor: '#494949',
    color: '#FFFFFF'
  },
  {
    img1: img4,
    img2: img5,
    img3: img6,
    brand: 'REALME',
    Discount: 'UP to 80% OFF',
    backGroundColor: '#F6DE8D',
    color: '#222222'

    // icon: AppleIcon
  },
  {
    img1: img7,
    img2: img8,
    img3: img9,
    brand: 'XIAOMI',
    Discount: 'UP to 80% OFF',
    backGroundColor: '#FFD1B0',
    color: '#222222'
    // icon:AppleIcon
  }
]

export const cardsDetails2: CardDetailsForOrderdetails1[] = [
  {
    item: ' Some great feature name here'
  },
  {
    item: ' Some great feature name here'
  },
  {
    item: ' Some great feature name here'
  },

  {
    item: ' Some great feature name here'
  }
]

// export default { cardsDetails, cardsDetails2 }
