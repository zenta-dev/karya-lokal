import Image from 'next/image';
import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface propsType {
    img: string;
    title: string;
    price: string;
    rating: number;
}

const ProductCard: React.FC<propsType> = ({
    img,
    title,
    price,
    rating,
}) => {
    function generateRating(rating: number): React.ReactNode {
        switch (rating) {
            case 1:
                return (
                    <div className="flex gap-1 text-[20px] text-[#FF9529]">
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                );
            case 2:
                return (
                    <div className="flex gap-1 text-[20px] text-[#FF9529]">
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                );
            case 3:
                return (
                    <div className="flex gap-1 text-[20px] text-[#FF9529]">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                );
            case 4:
                return (
                    <div className="flex gap-1 text-[20px] text-[#FF9529]">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>
                );
            case 5:
                return (
                    <div className="flex gap-1 text-[20px] text-[#FF9529]">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                );
            default:
                return (
                    <div className="text-[20px] text-[#FF9529]">
                        Rating not available
                    </div>
                );
        }
    }

    return (
        <div className="pt-4 pb-4 px-4 border border-gray-200 rounded-xl max-w-[400px] bg-[#CBE1FD]">
            <div>
                <Image
                    className="w-full h-auto"
                    src={img}
                    width={200}
                    height={300}
                    alt={title}
                />
            </div>

            <div className="space-y-2 py-2">
                <h2 className="text-[#1E3A8A] font-medium uppercase">{title}</h2>
                <div className="font-bold flex gap-24">
                    Rp{price} 
                    <del className="text-gray-500 font-normal">
                        Rp.{(parseInt(price) + 65)}.000
                    </del>
                </div>    
                <div>{generateRating(rating)}</div>
            </div>
        </div>
    );
};

export default ProductCard;
