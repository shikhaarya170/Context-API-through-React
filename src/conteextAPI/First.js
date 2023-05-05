import React,{createContext,useState} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./Home";
import About from './About';
import Header from './Header';
import ecommerce from "./ecommerce.css";
import Cart from './Cart';

 export const ecommerceContext = createContext({});

function First() {
    const [cart,setCart] = useState([])
  return (
    <>
    <ecommerceContext.Provider value = {{cart,setCart}}>
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
    </Routes>
    </BrowserRouter>
    </ecommerceContext.Provider>
    </>
  )
}

export default First