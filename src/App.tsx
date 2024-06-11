import { Routes, Route } from 'react-router-dom'
import Home from './sections/Home'
import Order from './sections/Order/Order'
import MyCart from './sections/Order/Cart/MyCart'
import AddAndPayment from './sections/Order/Payment/AddAndPayment'
import Navbar from './Components/Navbar/Navbar'
import SubNavbar from './Components/Navbar/SubNavbar'
import Login from './Components/Page/Login'
import Forgotpassword from './Components/Page/Forgotpassword'
import Signin from './Components/Page/Signin'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider
} from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <SubNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="Forgotpassword" element={<Forgotpassword />} />
        <Route path="Signin" element={<Signin />} />

        <Route path="Order" element={<Order />} />
        <Route path="MyCart" element={<MyCart />} />
        <Route path="AddPayment" element={<AddAndPayment />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App
