// components/CartLoader.tsx
"use client"; // Mark as Client Component

import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadCart } from "@/store/cartSlice";

export default function CartLoader() {
  const { isSignedIn, user } = useUser();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSignedIn && user) {
      // Load the user's cart when they log in
      dispatch(loadCart(user.id));
    }
  }, [isSignedIn, user, dispatch]);

  return null; // This component doesn't render anything
}