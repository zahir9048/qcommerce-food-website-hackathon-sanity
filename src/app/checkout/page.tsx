"use client";
import Image from "next/image";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { clearCart } from "@/store/cartSlice";
import { useUser } from "@clerk/nextjs";
import CountryDropdown from "../components/countryDropdown";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const router = useRouter(); // Initialize useRouter
  const items = useSelector((state: RootState) => state.cart.items);
  const [isMounted, setIsMounted] = useState(false);
  const { user } = useUser();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
  });
  const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false); // Track checkout success

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Redirect to /home if cart is empty and checkout was not successful
  useEffect(() => {
    if (isMounted && items.length === 0 && !isCheckoutSuccess) {
      router.push("/"); // Redirect to /home
    }
  }, [isMounted, items, router, isCheckoutSuccess]);

  // Auto-fill form fields when user data is available
  useEffect(() => {
    if (user) {
      const firstName = user.firstName || "";
      const lastName = user.lastName || "";
      const email = user.primaryEmailAddress?.emailAddress || "";
      const phone = user.primaryPhoneNumber?.phoneNumber || "";

      setFormData((prevData) => ({
        ...prevData,
        firstName,
        lastName,
        email,
        phone,
      }));
    }
  }, [user]);

  if (!isMounted) {
    return null;
  }

  const handleCheckout = async () => {
    if (!user) {
      toast.error("You must be signed in to checkout.");
      return;
    }

    if (items.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }

    try {
      const orderData = {
        _type: "order",
        customer:
          user.fullName ||
          formData.firstName + " " + formData.firstName ||
          "Anonymous",
        phone: formData.phone || "N/A",
        email: formData.email || "N/A",
        items: items.map((item) => ({
          product: {
            _type: "reference",
            _ref: item.product._id,
          },
          quantity: item.quantity,
          price: item.product.price,
          totalPriceForThisProduct: item.product.price * item.quantity,
        })),
        totalAmount: items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        ),
        status: "processing",
        paymentMethod: "cash_on_delivery",
        shippingAddress: {
          street: formData.street,
          city: formData.city,
          state: formData.state,
          postalCode: formData.postalCode,
          country: formData.country,
        },
        createdAt: new Date().toISOString(),
      };
      console.log(orderData);
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Failed to create order.");
      }

      const { order } = await response.json();
      const orderId = order._id;

      await Promise.all(
        items.map(async (item) => {
          const updatedStock = item.product.stock - item.quantity;
          await fetch("/api/updateStock", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              productId: item.product._id,
              stock: updatedStock,
            }),
          });
        })
      );

      // Mark checkout as successful and redirect to /checkout-success
      setIsCheckoutSuccess(true); // Set checkout success to true
      router.push(`/checkout-success?orderId=${orderId}`);
      toast.success("Order placed successfully!");
      dispatch(clearCart(user.id));
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Failed to place order. Please try again.");
    }
  };

  const totalAmount = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
  return (
    <div className="min-h-screen pt-[115px] lg:pt-0 bg-white">
      {/* Background Section */}
      <div
        className="w-full bg-no-repeat bg-center flex justify-center"
        style={{
          backgroundImage: "url('/unsplash.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          height: "300px",
        }}
      >
        {/* Header Section */}
        <div className="max-w-[1320px] mx-auto px-[20px] lg:px-[60px] flex flex-col justify-center items-center text-white text-center py-16">
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            CheckOut
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="home" className="text-xl sm:text-2xl md:text-3xl">
              Home
            </a>
            <div className="flex items-center">
              <Image
                src="/Vector.png"
                width={10}
                height={10}
                alt="Vector Icon"
              />
              <a
                href="/checkout"
                className="ml-2 text-xl sm:text-2xl md:text-3xl text-[#FF9F0D]"
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="max-w-[1320px] px-[20px] lg:px-[60px] mx-auto px-4 py-8 bg-white"
        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-black">
                Shipping Address
              </h2>
              <div className="grid gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      readOnly
                      disabled
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Country
                  </label>
                  <CountryDropdown
                    value={formData.country}
                    onChange={(e) =>
                      setFormData({ ...formData, country: e.target.value })
                    }
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="street"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Street
                    </label>
                    <input
                      type="text"
                      id="street"
                      value={formData.street}
                      onChange={(e) =>
                        setFormData({ ...formData, street: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      value={formData.state}
                      onChange={(e) =>
                        setFormData({ ...formData, state: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="postalCode"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Postal Code
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      value={formData.postalCode}
                      onChange={(e) =>
                        setFormData({ ...formData, postalCode: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Link
                href="/cart"
                className="py-2 flex w-full justify-center items-center border border-gray-300 rounded-md text-sm font-medium w-72 text-black"
              >
                Back to cart
              </Link>
              <button
                onClick={handleCheckout}
                className="px-6 py-2 w-full bg-orange-500 text-white rounded-md text-sm font-medium w-72"
              >
                Checkout
              </button>
            </div>
          </div>

          {/* <div>
              <h2 className="text-xl font-semibold mb-4 text-black">Billing Address</h2>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="sameAsShipping"
                  className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                />
                <label htmlFor="sameAsShipping" className="text-sm text-gray-700">
                  Same as shipping address
                </label>
              </div>
            </div> */}

          <div className="p-6 rounded-lg border-2 border-gray-300">
            <h2 className="text-xl font-semibold mb-4 text-black">
              Order Summary
            </h2>
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product._id}
                  className="flex items-center space-x-4"
                >
                  <div className="relative h-16 w-16">
                    <img
                      src={item.product.mainImageUrl}
                      alt={item.product.name}
                      className="rounded-md object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.product.name}</h3>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-sm text-gray-500">
                      Price: ${item.product.price.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500">
                      Total: ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Info */}
            <div className="mt-6 space-y-2 border-t pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">${totalAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="lg:hidden grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Link
                href="/cart"
                className="py-2 flex w-full justify-center items-center border border-gray-300 rounded-md text-sm font-medium w-72 text-black"
              >
                Back to cart
              </Link>
              <button
                onClick={handleCheckout}
                className="px-6 py-2 w-full bg-orange-500 text-white rounded-md text-sm font-medium w-72"
              >
                Checkout
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}
