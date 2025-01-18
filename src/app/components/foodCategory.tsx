"use client";
import { Great_Vibes } from "@next/font/google";
import { useEffect, useState } from "react";
import { getAllCategories } from "@/sanity/lib/data";
import { ICategory } from "@/sanity/lib/interfaces";

const greatVibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
});

const FoodCategory = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data: ICategory[] = await getAllCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <div className="sec3 px-[20px] py-[60px] sm:px-[60px] text-white max-w-[1320px] relative lg:h-[600px] mx-auto flex flex-col">
        <div className="flex flex-col items-center">
          <h3
            className={`${greatVibes.className} text-[#FF9F0D] text-[32px] font-bold`}
          >
            Food Category
          </h3>
          <h1
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            className="text-[##FF9F0D] text-[48px] text-center"
          >
            <span>Ch</span>oose Food Item
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[40px] justify-items-center">
          {categories.slice(0, 4).map((category) => (
            <div
              key={category._id}
              className="max-w-[300px]  relative group cursor-pointer"
            >
              <img
                src={category.imageUrl}
                className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                alt={category.name}
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center flex flex-col gap-[5px]">
                  <div className="rounded-[6px] bg-white px-4 py-3 text-[#FF9F0D] w-fit font-bold text-[18px]">
                  Save 30%
                  </div>
                  <div className="rounded-[6px] bg-[#FF9F0D] text-white px-4 py-3 w-[250px] text-[20px] font-bold">
                    {category.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


export default FoodCategory;

