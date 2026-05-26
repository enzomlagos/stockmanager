import './App.css'
import { Layout } from './components/Layout/Layout'
import { AddProductForm } from './components/AddProduct/AddProductForm'
import Stock from './components/Stock/Stock'
import { Home } from './components/Home/Home'
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/stock" element= {<Stock Mensaje="Productos disponibles" />} />
          <Route path="/addProduct" element={<AddProductForm />} />
          <Route path="/stock/product/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
