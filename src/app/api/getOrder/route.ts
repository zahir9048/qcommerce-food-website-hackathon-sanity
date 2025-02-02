// app/api/getOrder/route.ts
import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

// Mark the route as dynamic
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const orderId = request.nextUrl.searchParams.get("orderId"); // Get the order ID from the query parameters

    if (!orderId) {
      return NextResponse.json(
        { message: "Order ID is required" },
        { status: 400 }
      );
    }

    // Fetch the order details from Sanity
    const order = await client.fetch(
      `*[_type == "order" && _id == $orderId][0]{
        _id,
        customer,
        items[]{
          product->{
            _id,
            name,
            price,
            "image": image.asset->url
          },
          quantity,
          price,
          totalPriceForThisProduct
        },
        totalAmount,
        status,
        paymentMethod,
        shippingAddress,
        createdAt
      }`,
      { orderId }
    );

    if (!order) {
      return NextResponse.json(
        { message: "Order not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ order }, { status: 200 });
  } catch (error) {
    console.error("Error fetching order:", error);
    return NextResponse.json(
      { message: "Failed to fetch order" },
      { status: 500 }
    );
  }
}