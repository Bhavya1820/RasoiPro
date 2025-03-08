import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/home'
import Pricing from './pages/pricing'
import Customer from './pages/Customer'
import InventoryManagement from './services/InventoryManagement'
import Contactus from './pages/contactus'
import Aboutus from './pages/aboutus'
import OrderManagement from './services/orderManagement'
import StaffManagement from './services/staffManagement'
import PaymentIntegration from './services/paymentIntegration'
import Reportsandanalytics from './services/reportsandanalytics'
import Waiterapp from './services/waiterapp'
import Scrolltotop from './scrolltotop'
import Tableorders from './services/tableorders'

function App() {

  return (
    <>
      <Router>
        <Scrolltotop></Scrolltotop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing></Pricing>} />
        <Route path="/customer" element={<Customer></Customer>} />
        <Route path="/inventorymanagement" element={<InventoryManagement></InventoryManagement>} />
        <Route path="/ordermanagement" element={<OrderManagement></OrderManagement>} />
        <Route path="/staffmanagement" element={<StaffManagement></StaffManagement>} />
        <Route path="/paymentintegration" element={<PaymentIntegration></PaymentIntegration>} />
        <Route path="/reportsandanalytics" element={<Reportsandanalytics></Reportsandanalytics>} />
        <Route path="/tableorders" element={<Tableorders></Tableorders>} />
        <Route path="/waiterapp" element={<Waiterapp></Waiterapp>} />
        <Route path="/contactus" element={<Contactus></Contactus>} />
        <Route path="/aboutus" element={<Aboutus></Aboutus>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
