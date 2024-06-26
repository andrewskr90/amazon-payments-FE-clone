import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Cart from './features/Cart'
import Layout from './layouts/Layout'
import { Item, ShopConfig } from './types'
import { useState } from 'react'
import espressoMachine from './assets/espressoMachine.avif'
import Products from './features/Products'
import About from './features/About'
import Blog from './features/Blog'

function App() {
    const [items, setItems] = useState<Item[]>([
        { id: 1, name: 'Espresso Machine', storeId: 1, quantity: 1, retail: 199.00, img: { src: espressoMachine, alt: 'Espresso Machine by Kitchen Smart' } }
    ])
    const shopConfig: ShopConfig = {
      id: 1,
      name: 'Kitchen Smart',
      formattedName: 'KitchenSmart',
      currency: 'GBP'
    }

  return (
    <Routes>
      <Route path='/*' element={<Layout shopConfig={shopConfig} items={items}>
          <Routes>
            <Route path="/" element={<Navigate to='cart' />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/cart" element={<Cart items={items} setItems={setItems} shopConfig={shopConfig} />} />
          </Routes>
      </Layout>} />
    </Routes>
  )
}

export default App
