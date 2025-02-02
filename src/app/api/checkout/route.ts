  import {client} from "@/sanity/lib/client";
  import { NextRequest, NextResponse } from "next/server";

  export async function POST(request: NextRequest) {
      try {
        const orderData = await request.json(); // Parse the request body
    
        // Create the order in Sanity
        const createdOrder = await client.create(orderData);
    
        return NextResponse.json({ order: createdOrder }, { status: 200 });
      } catch (error) {
        console.error("Error creating order:", error);
        return NextResponse.json(
          { message: "Failed to create order" },
          { status: 500 }
        );
      }
    }