import { useEffect, useState } from "react";
import Products from "./components/Products"
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";
import BuyNow from "./components/BuyNow";
import Login from "./components/Login";
import ProtectedRoute from "./Pages/ProtectedRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
 const[cart,setCart]=useState([]);
 useEffect(()=>{
  localStorage.setItem("cart",JSON.stringify(cart));
 
 },[cart]);
 const logout=()=>{
  localStorage.removeItem("user");
  window.location.reload();
 };
  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Header cart={cart} logout={logout} />
      <main style={{flex: 1}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products cart={cart} setCart={setCart}/>} />
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={
            <ProtectedRoute>
              <Cart cart={cart} setCart={setCart}/>
            </ProtectedRoute>
          } />
          <Route path="/buynow/:id" element={<BuyNow/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App