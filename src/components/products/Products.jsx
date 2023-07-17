/* eslint-disable no-unused-vars */

 
/* 
import { useState, useEffect } from 'react'
import './Products.css';
import axios from 'axios';

import { add } from '../../features/cartSlice/CartSlice';
import { useDispatch, useSelector } from 'react-redux';

const Products = () => {

    const [products, setProducts] = useState([]);
    // console.log(products)

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const dispatch = useDispatch();             // storing data to store
    // const {cart} = useSelector((state)=>state)  // getting data from store

    const fetchProducts = async()=>{

            try {
                setLoading(true)
                let allProducts = await axios.get('https://fakestoreapi.com/products')
                setProducts(allProducts.data)
                setLoading(false)
                setError(false)
        
            } catch (error) {
                setError(true)
                setLoading(false)
            }
    }

    useEffect(()=>{
        fetchProducts()
    },[]);


    const addToCart = (item)=>{
        
        dispatch(add(item)) 

        // dispatch an action to cartSlice,
        // which adds the item object passed as argument in state of cartReducer. add() method
    }
    
  return (
    <div className='products'>
        {
            loading && (<h1 style={{color: 'white'}}>fetching data...</h1>)
        }
        {
            error && (<h1  style={{color: 'red'}}>network error...</h1>)
        }
        {
            products &&(
                products.map((item)=>{
                    return(
                        <div className="card" key={item.id}>
                            <img src={item.image} alt="" />
                            <h4 className='title'>{item.title}</h4>
                            <h5 className='price'>$ {item.price}</h5>
                            <button onClick={()=>addToCart(item)}>add to cart</button>
                        </div>
                    )
                })
            )
        }
    </div>
  )
}

export default Products  */





//  This is for createAsyncThunk.....
 
import './Products.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, productSlice } from "../../features/productSlice/ProductSlice";
import { STATUS } from "../../features/productSlice/ProductSlice";
import { useEffect } from "react";
import { add } from '../../features/cartSlice/CartSlice';

const Products = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());  
        // fetchProducts is our async function.. created for api call.. inside Productslice.js
        // dispatch() it to store.
     
    },[dispatch]);

    const {data: products, status } = useSelector((state)=>state.products);
    // imported data, status from redux store.. we just dispatch above.

    
    const addToCart = (item)=>{
        dispatch(add(item));
    }

    if(status === STATUS.LOADING){
        return (<h1 style={{color: 'white'}}>fetching data...</h1>)
    }
    if(status === STATUS.ERROR){
        return (<h1  style={{color: 'red'}}>network error...</h1>)
    }

  return (
    <div className="products">
        {
            products &&(
                products.map((item)=>{
                    return(
                        <div className="card" key={item.id}>
                            <img src={item.image} alt="" />
                            <h4 className='title'>{item.title}</h4>
                            <h5 className='price'>$ {item.price}</h5>
                            <button onClick={()=>addToCart(item)}>add to cart</button>
                        </div>
                    )
                })
            )
        }
    </div>
  )
}

export default Products