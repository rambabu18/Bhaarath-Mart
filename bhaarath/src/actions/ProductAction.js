import axios from 'axios'

const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_FAIL, PRODUCT_SAVE_FAIL, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_SUCCESS, PRODUCT_SAVE_SUCCESS, PRODUCT_SAVE_REQUEST } = require("../constants/ProductConstants")


const listProducts = () => async (dispatch)=> {

    try{
        dispatch({type:PRODUCT_LIST_REQUEST})
    const{data} = await axios.get('/api/products')
    dispatch({type:PRODUCT_LIST_SUCCESS, payload:data})
    }
    catch(error){
        dispatch({type:PRODUCT_LIST_FAIL, payload: error.message});
    }    
}

const detailsProduct =(id)=>async (dispatch) =>{
    try{
        dispatch({type:PRODUCT_DETAILS_REQUEST, payload:id})
        const {data} = await axios.get("/api/products/" + id)
        dispatch({type:PRODUCT_DETAILS_SUCCESS, payload:data})
    }
    catch(error){
        dispatch({type:PRODUCT_DETAILS_FAIL, payload:error.message})
    }
}

const saveProduct = (product) => async (dispatch, getState)=>{
    try{
        dispatch({type:PRODUCT_SAVE_REQUEST, payload: product});
        const { userSignin: {userInfo}} = getState();
        const {data} = await axios.post("/api/products/", product, {headers:{
            'Authorization' : 'Bearer' + userInfo.token
        }
    });
    dispatch({type: PRODUCT_SAVE_SUCCESS, payload:data})
    } catch(error){

    dispatch({type: PRODUCT_SAVE_FAIL, payload:error.message});


    }

}



export {listProducts,detailsProduct,saveProduct}