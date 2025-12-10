import { useEffect, useState } from "react";
import Products from "./components/Products"
import { Link, Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/cart";
import BuyNow from "./components/BuyNow";
import Login from "./components/Login";
import ProtectedRoute from "./Pages/ProtectedRoute";

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
    <>
    <div>
      <header>
        <Link to= "/"><h1>MERN Ecommerce Project </h1></Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        {localStorage.getItem("user")?(
          <button onClick={logout}>Logout</button>
        ):(<Link to="/login">Login</Link>)
        }
        
        </header>
    <main>
    <Routes>
      <Route path="/" element={<Products cart={cart} setCart={setCart}/>}/> 
      <Route path="/product/:id" element={<Product/>}/>
       <Route path="/cart" element={
        <ProtectedRoute>
        <Cart cart={cart} setCart={setCart}/>
        </ProtectedRoute>
        } />

      <Route path="/buynow/:id" element={<BuyNow/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
      </main>
      </div>
    </>
  )
}

export default App