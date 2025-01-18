"use client";
import { Great_Vibes } from "@next/font/google";
import { useEffect, useState } from "react";
import { getCategoriesWithFoods } from "@/sanity/lib/data";
import { ICategoryWithFoods } from "@/sanity/lib/interfaces";

const greatVibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
});

const ChooseAndPick = () => {
  const [categories, setCategories] = useState<ICategoryWithFoods[]>([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const fetchCategoriesWithFoods = async () => {
      try {
        const data = await getCategoriesWithFoods();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories with foods:", error);
      }
    };

    fetchCategoriesWithFoods();
  }, []);

  return (
    <>
      <div className="sec6 px-[20px] sm:px-[60px] py-[60px] max-w-[1320px] lg:h-[800px] mx-auto flex items-center justify-center">
        <div className="mt-8">
          <div className="flex flex-col items-center">
            <h5
              className={`${greatVibes.className} text-[32px] text-[#FF9F0D] font-normal `}
            >
              Choose & pick
            </h5>
            <h2
              className="text-white text-[48px] font-bold text-center"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              <span className="text-[#FF9F0D]">Fr</span>om Our Menu
            </h2>
          </div>

          <div className="flex md:flex-row flex-col">
            {categories.map((category, index) => (
              <button
                key={category._id}
                className={`flex-1 py-2 text-center font-medium text-lg ${activeTab === index ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500 hover:text-blue-500"}`}
                onClick={() => setActiveTab(index)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="p-4 text-gray-700 flex flex-col items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
              <div className="col-span-1 md:col-span-1 w-[100%] lg:max-w-[300px] h-[330px] relative group cursor-pointer w-full ">
                <img
                  src={categories[activeTab]?.imageUrl}
                  className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                  alt=""
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center flex flex-col gap-[5px]">
                    <div className="rounded-[6px] bg-white px-4 py-3 text-[#FF9F0D] w-fit font-bold text-[18px]">
                      Save 30%
                    </div>
                    <div className="rounded-[6px] bg-[#FF9F0D] text-white px-4 py-3 w-[250px] text-[20px] font-bold">
                      {categories[activeTab]?.name}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-2 flex flex-wrap gap-[30px] w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[30px] w-full max-h-[500px] overflow-y-auto">
                  {categories[activeTab]?.foods.map((food) => (
                    <a
                      href={`/shop/${food._id}`}
                      key={food._id}
                      className="flex gap-[20px] cursor-pointer"
                    >
                      <div className="w-[80px] h-[80px]">
                        <img
                          src={food.imageUrl}
                          className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                          alt={food.name}
                        />
                      </div>
                      <div className="flex flex-col text-white">
                        <h5 className="font-bold text-[20px]">{food.name}</h5>
                        <p className="m-0 text-[14px] font-normal">
                          {food.description}
                        </p>
                        <p className="m-0 font-bold text-[18px] text-[#FF9F0D]">
                          {food.price} $
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseAndPick;
