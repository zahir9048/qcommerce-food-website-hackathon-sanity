import { NextRequest, NextResponse } from "next/server";
import {client} from "@/sanity/lib/client";


export async function POST(request: NextRequest) {
  try {
    const { productId, stock } = await request.json(); // Parse the request body

    // Update the stock of the food item in Sanity
    const updatedProduct = await client
      .patch(productId) // Document ID to update
      .set({ stock }) // New stock value
      .commit(); // Commit the changes

    return NextResponse.json({ success: true, updatedProduct }, { status: 200 });
  } catch (error) {
    console.error("Error updating stock:", error);
    return NextResponse.json(
      { message: "Failed to update stock" },
      { status: 500 }
    );
  }
}