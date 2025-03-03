import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/home'
import Pricing from './pages/pricing'
import Customer from './pages/Customer'

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing></Pricing>} />
        <Route path="/customer" element={<Customer></Customer>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
