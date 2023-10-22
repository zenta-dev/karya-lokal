import React from 'react';
import ProductCard from './ProductCard';
const productsData = [
    {
        img: "/Tas Selempang.jpeg", 
        title: "TAS SELEMPANG CROC KULIT", 
        price: "44.000",
        rating: 1, 
    },
    {
        img: "/Sepatu.jpeg", 
        title: "SEPATU BEAUTODAY KHAKI", 
        price: "149.000",
        rating: 3,  
    },
    {
        img: "/Meja Belajar.jpeg", 
        title: "MEJA BELAJAR ONE SET", 
        price: "359.000",
        rating: 2, 
    },
    {
        img: "/Kukombo Dress.jpeg", 
        title: "GAUN KUKOMBO", 
        price: "69.000", 
        rating: 3, 
    },
    {
        img: "/Jam Tangan.jpeg", 
        title: "JAM TANGAN ALBA", 
        price: "250.000",
        rating: 2, 
    },
    {
        img: "/Alat Masak One Set.jpeg", 
        title: "ALAT MASAK ONE SET RACHAEL", 
        price: "300.000",
        rating: 1, 
    },
    {
        img: "/Sofa.jpeg", 
        title: "SOFA AMARELLA", 
        price: "999.999",
        rating: 2, 
    },
    {
        img: "/Blazer.jpeg", 
        title: "BLAZER COCOJA", 
        price: "56.000",
        rating: 3, 
    },
];

const Products = () => {
    return (
        <div>
            <div className="container pt-8 pb-10">
                <h2 className="text-center font-medium text-3xl pb-10">Products</h2>
                <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                    {productsData.map((item, index) => (
                        <ProductCard
                            key={index}
                            img={item.img}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
