import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'
import {useDispatch, useSelector} from 'react-redux'
import { getallproducts } from '../../JS/actions/productActions'
const ProductList = () => {
  const dispatch= useDispatch()
  useEffect(() => {
    dispatch(getallproducts())
  }, [])
  const list= useSelector(state=>state.productReducer.list)
  return (
    <div>
      <Link to="/add">Add product</Link>
      
     <div>
      {
        list.map(el=> <ProductCard el={el} key={el._id}/>)
      }
     </div>
    </div>
  )
}

export default ProductList