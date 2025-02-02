"use client"; // Mark as Client Component

import { useUser } from "@clerk/nextjs"; // Clerk authentication hook
import { useRouter } from "next/navigation"; // Next.js navigation
import { useDispatch } from "react-redux";
import { addItem } from "@/store/cartSlice";
import { IFoodItem } from "@/sanity/lib/interfaces"; // Import the IFoodItem type

interface AddToCartButtonProps {
  product: IFoodItem;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { isSignedIn, user, isLoaded } = useUser(); 
  const router = useRouter(); 
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (!isSignedIn || user == null) {
      router.push("/signin");
      return;
    }

    dispatch(
      addItem({
        userId: user.id, 
        item: {
          product: {
            _id: product._id,
            name: product.name,
            price: product.price,
            mainImageUrl: product.mainImageUrl,
            description: product.description,
            category: product.category,
            stock: product.stock,
            images: product.images,
          },
          quantity: 1,
        },
      })
    );
    router.push("/cart");
  };

  if (!isLoaded) {
    return null; // Return nothing while authentication is loading
  }

  const isOutOfStock = product.stock === 0;
  return (
    <button
      onClick={handleAddToCart}
      disabled={isOutOfStock} // Disable the button if out of stock
      className={`${
        isOutOfStock
          ? "bg-gray-400 cursor-not-allowed" // Gray background and disabled cursor
          : "bg-[#ff9f0d] hover:bg-[#FFF] hover:text-[#ff9f0d] hover:border hover:border-[#ff9f0d]" // Blue background and hover effect
      } text-white px-4 py-2 rounded`}
    >
      {isOutOfStock ? "Out of Stock" : "Add to Cart"}
    </button>
  );
}