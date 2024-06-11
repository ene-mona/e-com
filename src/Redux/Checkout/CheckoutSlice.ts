import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { OrderAndCart } from '../../sections/Order/Cart/CartAndOrder/OrderAndCartArray'
import { CartItem } from '../../Components/Types'

interface checkOutVal {
  array: CartItem[]
  subTotal: number
}
export let cartArr = OrderAndCart.slice()

const sumSubTotal = () => {
  const sum = cartArr
    .map((item, ind) => item.amount)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  return sum
}
const subTotalVal = sumSubTotal()

const initialState: checkOutVal = {
  array: cartArr,
  subTotal: subTotalVal
}

const checkoutSlice = createSlice({
  name: 'Checkout',
  initialState,
  reducers: {
    AddOrReduceCartItems(state, action: PayloadAction<{ id: number; value: number }>) {
      const { id, value } = action.payload
      const searchCart = state.array.find(item => item.id === id)
      searchCart ? (searchCart.quantity = value) : null
      searchCart ? (searchCart.amount = searchCart.totalAmount * value) : null
      cartArr = state.array
      state.subTotal = sumSubTotal()
    },
    RemoveFromCartArr(state, action: PayloadAction<number>) {
      state.array = state.array.filter(item => item.id !== action.payload)
      cartArr = state.array
      state.subTotal = sumSubTotal()
    },
    RemoveAllCartArr(state) {
      state.array = []
      cartArr = state.array
      state.subTotal = sumSubTotal()
    }
  }
})

export const { AddOrReduceCartItems, RemoveFromCartArr, RemoveAllCartArr } = checkoutSlice.actions
export default checkoutSlice.reducer
