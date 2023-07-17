import { useDispatch, useSelector } from "react-redux"
import './Cart.css'
import { Link } from "react-router-dom";
import { remove } from "../features/cartSlice/CartSlice";
const Cart = () => {

  const items = useSelector((state)=>state.cart);
  const dispatch = useDispatch()
  
  const removeProduct = (item)=>{
    dispatch(remove(item))
  }

  return (
    <div className="cart-page">
      
      { 
        items.length > 0 ? null : (<h1>Add products to cart</h1>)
      }
      {
        items.length > 0 ? null : (<p><Link to ='/'>products</Link></p>)
      }
      {
        items && (
          items.map((product)=>{
            return(
              <div key={product.id} className="cart">

                    <img src={product.image} alt="" />
                    <div className="product-details">
                        <h4 className="product-title">{product.title}</h4>
                        <h3 className="product-price">$ {product.price}</h3>
                        <button className="remove-btn" onClick={()=>removeProduct(product.id)}>remove</button>
                    </div>
                    
              </div>
            )
          })
        )
      }

    </div>
  )
}

export default Cart