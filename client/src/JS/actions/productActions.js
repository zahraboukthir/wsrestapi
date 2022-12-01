
import axios from 'axios'
import { ADD_PRODUCT_FAILED, ADD_PRODUCT_SUCCESS, DELET_PRODUCT_FAILED, DELET_PRODUCT_SUCCESS, EDIT_PRODUCT_FAILED, EDIT_PRODUCT_SUCCESS, GETONE_PRODUCT_FAILED, GETONE_PRODUCT_SUCCESS, GET_ALL_PRODUCTS_FAILED, GET_ALL_PRODUCTS_SUCCESS, LOADING } from "../actionTypes/productTypes"
//get allproducts
//Get /product
export const getallproducts=()=>async(dispatch)=>{
dispatch({type:LOADING})
try {
    const{data}= await axios.get('/product')
    dispatch({type:GET_ALL_PRODUCTS_SUCCESS,payload:data.products})
} catch (error) {
    dispatch({type:GET_ALL_PRODUCTS_FAILED,payload:error})
    console.log(error)
}


}
//Add product
//POST /product/addprod
export const addproduct=(newproduct,navigate)=>async(dispatch)=>{
    dispatch({type:LOADING})
    try {
        const{data}= await axios.post('/product/addprod',newproduct)
        dispatch({type:ADD_PRODUCT_SUCCESS})
        dispatch(getallproducts())
        navigate("/products")
    } catch (error) {
        dispatch({type:ADD_PRODUCT_FAILED,payload:error})
        console.log(error)
    }
    
    
    }
// prod detatis by id
//Get /product/:idprod

export const getoneproduct=(idprod)=>async(dispatch)=>{
    dispatch({type:LOADING})
    try {
        const{data}= await axios.get(`/product/${idprod}`)
        dispatch({type:GETONE_PRODUCT_SUCCESS,payload:data.product})
    } catch (error) {
        dispatch({type:GETONE_PRODUCT_FAILED,payload:error})
        console.log(error)
    }
    
    
    }
// Edit prod
//Put /product/:idprod
export const editproduct=(idprod, editedproduct,navigate)=>async(dispatch)=>{
    dispatch({type:LOADING})
    try {
        const{data}= await axios.put(`/product/${idprod}`,editedproduct)
       console.log(data)
        dispatch({type:EDIT_PRODUCT_SUCCESS})
        dispatch(getallproducts())
        navigate("/products")
    } catch (error) {
        dispatch({type:EDIT_PRODUCT_FAILED,payload:error})
        console.log(error)
    }
    
    
    }
//delete prod
//delete /product/:idprod
export const deletproduct=(idprod)=>async(dispatch)=>{
    dispatch({type:LOADING})
    try {
        const{data}= await axios.delete(`/product/${idprod}`)
        console.log(data)
        dispatch({type:DELET_PRODUCT_SUCCESS,payload:data})
        dispatch(getallproducts())
    } catch (error) {
        dispatch({type:DELET_PRODUCT_FAILED,payload:error})
        console.log(error)
    }
    
    
    }