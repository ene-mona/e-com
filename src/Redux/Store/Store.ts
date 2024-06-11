import { configureStore } from '@reduxjs/toolkit'
import CheckoutSliceReducer from '../Checkout/CheckoutSlice'

export const store = configureStore({
  reducer: {
    checkout: CheckoutSliceReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
