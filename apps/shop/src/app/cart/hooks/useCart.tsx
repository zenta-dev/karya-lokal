import { createContext, useContext, useState } from "react";

type CartContextType = {
    cartTotalOty: number;
};

export const CartContext =
createContext<CartContextType | null>(null);

interface Props {
    [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
    const [cartTotalOty, setCartTotalOty] = useState(0);

    const value = {
        cartTotalOty,
    };

    return <CartContext.Provider value={value} {... props} />;
};
export const useCart = () =>{
    const context = useContext(CartContext);

    if(context === null) {
        throw new Error("useCart must be used within a CartContextProvider")
    }

    return context
};