"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function SyncCart() {
  const { isSignedIn, user } = useUser();
  const items = useSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    if (isSignedIn && user) {
      // Sync cart data with the database
      const syncCart = async () => {
        await fetch("/api/cart/sync", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: user.id, items }),
        });
      };

      syncCart();
    }
  }, [isSignedIn, user, items]);

  return null;
}