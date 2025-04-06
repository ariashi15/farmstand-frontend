import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import SearchProduce from './pages/SearchProduce';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchProduce />} />
      </Routes>
    </>
  )
}

export default App
