import React, {useState, useEffect} from 'react'
import axios from '../../api'

function Product() {
    useEffect(() =>{
    axios
    .get ("/user")
    .then(res => console.log(res))
    .catch(res => console.log(res))
    },[])
  return (
    <div><h2>homework</h2></div>
  )
}

export default Product