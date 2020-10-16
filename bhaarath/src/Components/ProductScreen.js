import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {detailsProduct} from '../actions/ProductAction'
import { Link } from 'react-router-dom';


function ProductScreen(props){
    const [qty,setQty] = useState(1)
    const productDetails = useSelector(state=>state.productDetails)
    const {product,loading,error} = productDetails
    const dispatch = useDispatch()

    useEffect((props)=> {
        console.log(props.match.params.id);
        dispatch(detailsProduct(props.match.params.id));
        return()=>{
           //
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handleAddCart =()=>{
        props.history.push('/cart/' + props.match.params.id + "? Qty=" + qty)
    }
    
    return  (
          <div>
            <div className='back-to-results' >
            <Link to='/' > Back to Home </Link>
            </div>

            {loading ? <div>Loading...</div>:error ?
             <div>{error}</div>: 
        (
            <div className='details' >
            <div className='details-image' >
            <img src={product.image} alt='product' ></img>
            </div>
            <div className='details-info' >
                <ul>
                    <li >
                         <h4>{product.name}</h4>
                    </li>
                    <li>
                        Brand:{product.brand}
                    </li>
                
                    <li>
                     <b>  Price: {product.price} Rs </b>
                    </li>
                    

                    <li>
                        Rating: {product.rating} Stars ({product.numReviews})
                    </li>

                    <li>
                        Description:
                        <div>
                            {product.description}
                        </div>
                    </li>
                </ul>
            </div>
            <div className='details-action' >
            <ul>
                <li>
                    Price: {product.price}
                </li>
                <li>
                    Status: { product.countInStock > 0 ? "In Stock" : "Unvailable" }
                </li>   
                <li>
                    Qty : <select value={qty} onChange={(e)=>{setQty(e.target.value)}} >
                        {[...Array(product.countInStock).keys()].map(x=>
                        <option key={x+1} value={x+1} > {x+1}  </option>    
                            )}
                
                    </select>
                </li>
                <li>
                    {product.countInStock>0 && 
                    <button className='button' onClick={handleAddCart}  >Add to Cart</button>
                     }
                </li>
            </ul>
            </div>
            </div> 
           
        )
            }
           
           </div>
             )
    
    
                
        
}
export default ProductScreen