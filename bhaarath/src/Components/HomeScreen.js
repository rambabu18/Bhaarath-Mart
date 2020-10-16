import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../actions/ProductAction'

function HomeScreen(){

    const productList = useSelector(state=>state.productList)
    const {products, loading, error} = productList
    const dispatch = useDispatch()

    useEffect(()=>{
        // axios.get("/api/products")
        // .then(res=>{
        //     setProduct(res.data)
        // })
        // .catch(err=>{
        //     console.log(err)
        // })
    dispatch(listProducts())
     return () =>{
            
     }
     // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return loading ? <div>Loading...</div> :
          error ? <div>{error}</div> :  
       <ul className="products" >
    {
           products.map(product=>
            <li key={product.id} > 
            <div className="product" >
            <Link to={'/product/' +product.id }>
            <img className="product-image" src={product.image} alt="product"/>
                 </Link>
                
                <div className="product-name" > 
                  <Link to={'/product/' +product.id }>{product.name} </Link>
                 </div>
                <div className="product-brand" >{product.brand}  </div>
                <div className="product-price" >Price: {product.price} RS</div>
                <div className="product-make" >{product.make}</div>
        <div className="product-rating" >Rating: {product.rating} stars , ({product.numReviews} Reviews)</div>
            </div>   
        </li>  
        )} 
  </ul>
   
    }
export default HomeScreen