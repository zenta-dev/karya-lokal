import React from 'react';
import DetailProduct from './[productId]/page';

interface IParams {
  productId?: string; 
}

const Product: React.FC<{ params: IParams }> = ({ params }) => {
  console.log(params.productId); 

  return (
    <div className="p-8">
      <DetailProduct params={{
        productId: ''
      }} />
    </div>
  );
};

export default Product;