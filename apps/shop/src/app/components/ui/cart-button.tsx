import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { HiShoppingCart } from "react-icons/hi";
interface CartButtonProps {
  productId: string;
}
export const CartButton = ({ productId }: CartButtonProps) => {
  const [loading, setLoading] = useState(false);
  const addToCart = async () => {
    setLoading(true);
    console.log("Add to cart");
    console.log(productId);
    try {
      const cart = await axios.post("/api/cart", {
        productId,
      });
      console.log(cart);
      toast.success(cart.data);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className="bg-gray-900 text-white px-4 py-2 rounded-md"
      onClick={addToCart}
      disabled={loading}
    >
      <span className="sr-only">Add to cart</span>
      <HiShoppingCart className="text-2xl" />
    </button>
  );
};
