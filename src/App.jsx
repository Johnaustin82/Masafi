import { useState } from 'react'
import Landingpage from './components/Landingpage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from './components/Products';
import ContactUs from './components/Contactus';

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/product' element={<ProductsPage/>}/>
        <Route path='/contact'element={<ContactUs/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
