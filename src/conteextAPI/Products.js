import React ,{useContext,useEffect,useState} from 'react';
import axios from "axios";
import { ecommerceContext } from './First';

function Products() {
 const {cart,setCart} = useContext(ecommerceContext)
const [products,setProducts] = useState([])
 useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((result)=>{
        setProducts(result.data);
    })
 } ,[])
  
function handleAddtoCart(e,product) {
    e.preventDefault();
    setCart([...cart,product])
}

  return (
    <section className='products'>
    <h2>products</h2>
    <div className='products-container'>
        {products.map((product,index)=>{
            return (
               <div className='product'>
                <img src={product.image} alt={product.title}/>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <a href="" onClick={(e)=> handleAddtoCart(e,product)}>
                 Add to cart 
                </a>
               </div>
             );
        })}
    </div>
    </section>
  )
}

export default Products