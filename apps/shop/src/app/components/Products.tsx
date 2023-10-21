import React from 'react';
import ProductCard from './ProductCard';
const productsData = [
    {
        img: "/Tas Selempang.jpeg", 
        title: "Tas Selempang Croc Kulit", 
        desc: "Kenakan tas mini yang nyaman dan super bergaya ini dan bebaskan dirimu!", 
        rating: 1, 
        price: "44.000", 
    },
    {
        img: "/Sepatu.jpeg", 
        title: "Sepatu BeauToday Khaki", 
        desc: "Didesain dengan desain warna campuran, sepatu kasual ini menjadi tren tak terkalahkan.", 
        rating: 3, 
        price: "149.000", 
    },
    {
        img: "/Meja Belajar.jpeg", 
        title: "Meja Belajar One Set", 
        desc: "Buat belajarmu nyaman dengan memakai meja belajar ini, karena ini didesain dengan konsep earthtone.", 
        rating: 2, 
        price: "359.000", 
    },
    {
        img: "/Kukombo Dress.jpeg", 
        title: "Gaun Kukombo", 
        desc: "Gaun bernuansa vintage bermotif bunga siap mewarnai hari-harimu!", 
        rating: 3, 
        price: "69.000", 
    },
    {
        img: "/Kukombo Dress.jpeg", 
        title: "Gaun Kukombo", 
        desc: "Gaun bernuansa vintage bermotif bunga siap mewarnai hari-harimu!", 
        rating: 2, 
        price: "69.000", 
    },
    {
        img: "/Kukombo Dress.jpeg", 
        title: "Gaun Kukombo", 
        desc: "Gaun bernuansa vintage bermotif bunga siap mewarnai hari-harimu!", 
        rating: 1, 
        price: "69.000", 
    },
    {
        img: "/Kukombo Dress.jpeg", 
        title: "Gaun Kukombo", 
        desc: "Gaun bernuansa vintage bermotif bunga siap mewarnai hari-harimu!", 
        rating: 2, 
        price: "69.000", 
    },
    {
        img: "/Kukombo Dress.jpeg", 
        title: "Gaun Kukombo", 
        desc: "Gaun bernuansa vintage bermotif bunga siap mewarnai hari-harimu!", 
        rating: 3, 
        price: "69.000", 
    },
];

const Products = () => {
    return (
        <div>
            <div className="container pt-16">
                <h2 className="text-center font-medium text-4xl pb-4">Products</h2>
                <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                    {productsData.map((item, index) => (
                        <ProductCard
                            key={index}
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            rating={item.rating}
                            price={item.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
