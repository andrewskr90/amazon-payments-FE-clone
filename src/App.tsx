import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Layout from './Layout'

function App() {

  return (
    <Routes>
      <Route path='/*' element={<Layout>
          <Routes>
            <Route path="/" element={<Navigate to='cart' />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
      </Layout>} />
    </Routes>
  )
}

export default App
