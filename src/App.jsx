import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import FarmDashboard from './pages/FarmDashboard'
import FarmInfo from './pages/FarmInfo'
import FarmProducts from './pages/FarmProducts'
import FarmOrders from './pages/FarmOrders'
import SearchProduce from './pages/SearchProduce';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/farmdashboard" element={<FarmDashboard />}>
          <Route index element={<FarmInfo />} />

          <Route path="info" element={<FarmInfo />} />
          <Route path="products" element={<FarmProducts />} />
          <Route path="orders" element={<FarmOrders />} />
        </Route>
        <Route path="/search" element={<SearchProduce />} />
      </Routes>
    </>
  )
}

export default App
