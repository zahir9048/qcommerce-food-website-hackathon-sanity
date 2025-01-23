"use client"

import React from "react";
import Cart from "../components/cart";
import { useRouter } from "next/navigation"; 
import { useUser } from "@clerk/nextjs";


export default function ShoppingCart() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  if (!isSignedIn) {
    // Show a toast notification
    // toast.error("You must be signed in to add items to the cart.");
    router.push("/signin");
    return;
  }
  return (
    <>
      <Cart />
    </>
  );
}
