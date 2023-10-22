import React from 'react'

const DetailProduct = async({
    params,
}:{
    params:{productId:string}
}) => {
  
    return (
    <div>DetailProduct :{params.productId}</div>
  )
}

export default DetailProduct