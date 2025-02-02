"use client";

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
      <div className="sec1 max-w-[1320px] pt-[110px] lg:pt-[0px] relative mx-auto px-[20px] sm:px-[60px] flex justify-between items-start md:flex-row flex-col my-[50px]">
        <Cart />
      </div>
    </>
  );
}
