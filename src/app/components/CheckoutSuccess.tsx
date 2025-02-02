"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface OrderItem {
  product: {
    _id: string;
    name: string;
    price: number;
    image: string;
  };
  quantity: number;
  price: number;
  totalPriceForThisProduct: number;
}

interface Order {
  _id: string;
  customer: string;
  items: OrderItem[];
  totalAmount: number;
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  createdAt: string;
  status: string;
  paymentMethod: string;
}

export function CheckoutSuccess() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId"); // Get the order ID from the query parameters
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  const paymentMethods = [
    { title: "Credit Card", value: "credit_card" },
    { title: "PayPal", value: "paypal" },
    { title: "Cash on Delivery", value: "cash_on_delivery" },
  ];

  const getPaymentMethodTitle = (value: string) => {
    const paymentMethod = paymentMethods.find(
      (method) => method.value === value
    );
    return paymentMethod ? paymentMethod.title : "Unknown Payment Method";
  };

  useEffect(() => {
    if (orderId) {
      const fetchOrder = async () => {
        try {
          const response = await fetch(`/api/getOrder?orderId=${orderId}`);
          if (!response.ok) {
            throw new Error("Failed to fetch order details");
          }
          const { order } = await response.json();
          setOrder(order);
        } catch (error) {
          console.error("Error fetching order:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchOrder();
    }
  }, [orderId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!order) {
    return <p>Order not found.</p>;
  }

  return (
    <>
      <section className="max-w-[1320px] mx-auto pt-[150px] py-[20px] lg:py-[50px] px-[20px] lg:px-[60px] text-white body-font bg-white">
        <div className="container mx-auto flex sm:px-5 flex-col lg:flex-row text-[#000]">
          <div className="w-full">
            <h1 className="text-3xl font-bold mb-4">
              Order Placed Successfully!
            </h1>
            <div className="flex flex-col gap-[10px] sm:flex-row sm:gap-unset justify-between items-center">
              <div className="flex">
                <p className="text-gray-700">
                  Your order ID is:{" "}
                  <strong className="text-black">{order._id}.</strong>
                  You will receive your order in{" "}
                  <span className="font-bold text-[#ff9f0d]">45 minutes</span>.
                </p>
              </div>
              <Link
                href="/shop"
                className="text-center px-4 py-2 rounded bg-[#ff9f0d] hover:bg-[#FFF] hover:text-[#ff9f0d] hover:border hover:border-[#ff9f0d] text-white"
              >
                Continue Ordering
              </Link>
            </div>

            <div className="mt-8 border border-[#ff9f0d] rounded-lg p-3 sm:p-4">
              <div className="">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  Order Details
                </h2>
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div
                      key={item.product._id}
                      className="flex items-center border-b pb-4"
                    >
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        width={100}
                        height={100}
                        className="w-24 h-24 object-cover rounded"
                      />
                      <div className="ml-4">
                        <p className="text-lg font-semibold text-black">
                          {item.product.name}
                        </p>
                        <p className="text-black text-[14px] sm:text-[16px]">
                          Quantity: {item.quantity}
                        </p>
                        <p className="text-black text-[14px] sm:text-[16px]">
                          Price: ${item.price.toFixed(2)}
                        </p>
                        <p className="text-black text-[14px] sm:text-[16px]">
                          Total: ${item.totalPriceForThisProduct.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-black text-[14px] sm:text-[16px] mt-2">
                  <p>
                    <span className="font-bold">Order Status:</span>{" "}
                    {order.status}
                  </p>
                </div>
              </div>

              <div className="mt-2">
                <p className="text-xl font-bold">
                  Total Amount: ${order.totalAmount.toFixed(2)}
                </p>
              </div>
            </div>

            {/* Display Shipping Address */}
            <div className="mt-8 border border-[#ff9f0d] rounded-lg p-3 sm:p-4">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Shipping Details
              </h2>
              <p className="text-black text-[14px] sm:text-[16px]">
                <span className="font-bold">Address:</span>{" "}
                {order.shippingAddress.street}, {order.shippingAddress.city},{" "}
                {order.shippingAddress.postalCode},{" "}
                {order.shippingAddress.state}, {order.shippingAddress.country}.
              </p>
            </div>

            <div className="mt-8 border border-[#ff9f0d] rounded-lg p-3 sm:p-4">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Payment Details
              </h2>
              <div className="'flex flex-col gap-[15px] text-[14px] sm:text-[16px] text-black">
                <p className="">
                  <span className="font-bold">Payment Method:</span>{" "}
                  {getPaymentMethodTitle(order.paymentMethod)}
                </p>
                <p className="">
                  <span className="font-bold">Card Number:</span> 1234 1234 1234
                  1234
                </p>
                <p className="">
                  <span className="font-bold">Payment Status:</span> Paid
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
