export interface SwiperContent {
  id?: number | string
  image?: string
  alt?: string
  cardNo?: number | string
  color?: string
  shadow?: string
  img?: string
  Ellipse?: string[]
  text?: string
  amount?: string
  renderSlideContent?: () => JSX.Element
}

export interface SwipeProps {
  swiperContent?: SwiperContent[]
  renderSlideContent?: (content: SwiperContent) => JSX.Element | null
}

export interface CardDetailsType {
  cardNo: number | string
  color?: string
  shadow?: string
  img?: string
  Ellipse?: string[]
  text?: string
  amount?: string
}

export interface ImageDetails {
  img: string
  text: string
}

export interface CardsProps {
  cards: CardDetailsType[]
  images?: ImageDetails[]
}
export interface Item {
  icon: React.ComponentType
  text: string
}

export interface MenuItem {
  title: string
  submenu?: MenuItem[]
}
export interface image {
  img: string
}
export interface reviewDetails {
  id: number
  numberOfLikes: number
  numberOfDisLikes: number
  rating: number
  coment1: string
  coment2: string
  image: string
  text1: string
  date: string
  text2: string
}

export interface CardDetailsForOrderdetails {
  img1: string
  img2: string
  img3: string
  icon?: React.ElementType
  brand: string
  Discount: string
  backGroundColor: string
  color: string
}

export interface CardDetailsForOrderdetails1 {
  item: string
}
export interface CartItem {
  id: number
  img: string
  name: string
  desc: string
  seller: string
  amount: number
  totalAmount: number
  quantity: number
  favorite: boolean
}
export interface DeliveryItem {
  name: string
  number: number
  text: string
  hover: boolean
}
export interface paymentItem {
  img: string
  cardNumber: string
  option1: string
  option2: string
  width: string
  height: string
  hover: boolean
}
