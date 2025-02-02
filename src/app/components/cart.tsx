"use client";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { removeItem, updateQuantity } from "@/store/cartSlice";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);
  const [isMounted, setIsMounted] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Return nothing during server-side rendering
  }

  const handleRemoveItem = (productId: string) => {
    if (!user) {
      console.error("User is not signed in.");
      return;
    }

    dispatch(removeItem({ userId: user.id, productId }));
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (!user) {
      console.error("User is not signed in.");
      return;
    }

    const item = items.find((item) => item.product._id === productId);
    if (!item) {
      console.error("Product not found in cart.");
      return;
    }

    if (quantity > item.product.stock) {
      --quantity;
      toast.error(
        `Only ${item.product.stock} ${item.product.name} available in stock.`
      );
      return;
    }

    const newQuantity = Math.max(1, Math.min(quantity, item.product.stock));
    dispatch(
      updateQuantity({ userId: user.id, productId, quantity: newQuantity })
    );
  };

  const totalCost = items.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);

  return (
    <div className="flex flex-col w-full items-center">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="w-full space-y-4 border border-[#ff9f0d] rounded-lg">
            {items.map((item) => {
              if (!item.product) {
                console.error("Invalid product in cart:", item);
                return null; // Skip rendering invalid items
              }

              return (
                <li key={item.product._id} className="border p-4 rounded-lg relative">
                  <div className="flex gap-4 flex-col sm:flex-row">
                    <div className="w-24 h-24 relative">
                      <img
                        src={item.product.mainImageUrl} // Use mainImageUrl
                        alt={item.product.name}
                        className="object-cover rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">
                        {item.product.name}
                      </h3>
                      <p className="text-black">{item.product.description}</p>
                      <p className="text-black">
                        Price: ${item.product.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              handleUpdateQuantity(
                                item.product._id,
                                item.quantity - 1
                              )
                            }
                            className="bg-gray-200 text-gray-700 px-2 py-1 rounded"
                          >
                            -
                          </button>
                          <p className="text-black">{item.quantity}</p>
                          <button
                            onClick={() => {
                              handleUpdateQuantity(
                                item.product._id,
                                item.quantity + 1
                              );
                            }}
                            className={`${
                              item.quantity >= item.product.stock
                                ? "bg-gray-200 text-gray-400 cursor-not-allowed" // Disabled style
                                : "bg-gray-200 text-gray-700" // Enabled style
                            } px-2 py-1 rounded`}
                          >
                            +
                          </button>
                        </div>
                        <p className="text-black">
                          Total: $
                          {(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.product._id)} // Add remove button
                        className="bg-red-500 text-white px-4 py-2 rounded absolute top-[5px] right-[5px]"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          {/* Display the total cost of all items */}
          <div className="w-full mt-6 p-4 border border-[#ff9f0d] rounded-lg flex justify-between items-center">
            <h3 className="text-xl font-semibold">
              Total: ${totalCost.toFixed(2)}
            </h3>
            <Link href="/checkout" className="underline text-[#ff9f0d]">
              Proceed to checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
