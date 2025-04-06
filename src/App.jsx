import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Header from './components/Header'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App
