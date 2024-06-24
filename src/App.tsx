import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Layout from './Layout'
import { CartProduct, ShopConfig } from './types'

function App() {

    const shopConfig: ShopConfig = {
      id: 1,
      name: 'Kitchen Smart',
      formattedName: 'KitchenSmart',
      currency: 'GBP'
    }
    const cartProducts: CartProduct[] = [
        { name: 'Espresso Machine', storeId: 1, quantity: 1, retail: 199.00, img: { src: '', alt: '' } }
    ]


  return (
    <Routes>
      <Route path='/*' element={<Layout shopConfig={shopConfig}>
          <Routes>
            <Route path="/" element={<Navigate to='cart' />} />
            <Route path="/cart" element={<Cart cartProducts={cartProducts} shopConfig={shopConfig} />} />
          </Routes>
      </Layout>} />
    </Routes>
  )
}

export default App
