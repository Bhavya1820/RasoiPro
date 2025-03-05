import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/home'
import Pricing from './pages/pricing'
import Customer from './pages/Customer'
import InventoryManagement from './services/InventoryManagement'
import Contactus from './pages/contactus'
import Aboutus from './pages/aboutus'

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing></Pricing>} />
        <Route path="/customer" element={<Customer></Customer>} />
        <Route path="/inventorymanagement" element={<InventoryManagement></InventoryManagement>} />
        <Route path="/contactus" element={<Contactus></Contactus>} />
        <Route path="/aboutus" element={<Aboutus></Aboutus>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
