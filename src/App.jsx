import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import ExploreFarms from './pages/ExploreFarms';
import FarmDashboard from './pages/FarmDashboard'
import FarmInfo from './pages/FarmInfo'
import FarmProducts from './pages/FarmProducts'
import FarmOrders from './pages/FarmOrders'
import SearchProduce from './pages/SearchProduce';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import Account from './pages/Account';
import Messages from './pages/Messages';
import FarmPage from './pages/FarmPage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<ExploreFarms />} />
        <Route path="/farmpage" element={<FarmPage />} />
        <Route path="/product" element={<ProductPage />}/>
        <Route path="/farmdashboard" element={<FarmDashboard />}>
          <Route index element={<FarmInfo />} />
          <Route path="info" element={<FarmInfo />} />
          <Route path="products" element={<FarmProducts />} />
          <Route path="orders" element={<FarmOrders />} />
        </Route>
        <Route path="/search" element={<SearchProduce />}>
          <Route index element={<ProductPage />} />
          <Route path="product" element={<ProductPage />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </>
  )
}

export default App
