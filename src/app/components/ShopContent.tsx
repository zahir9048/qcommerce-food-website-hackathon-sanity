"use client"
import { Checkbox } from "@heroui/checkbox";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { getCategoriesWithFoods } from "@/sanity/lib/data";
import { ICategoryWithFoods } from "@/sanity/lib/interfaces";
import CustomPagination from "../components/pagination";
import SearchBar from "../components/searchBar";
import { useSearchParams } from "next/navigation";

export function ShopContent() {
  const [categoriesWithFoods, setCategoriesWithFoods] = useState<
    ICategoryWithFoods[]
  >([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>("az");
  // const [searchQuery, setSearchQuery] = useState<string>(""); // State for search query

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const searchParams = useSearchParams();
  const searchQueryFromURL = searchParams.get("search") || ""; // Get search query from URL
  const [searchQuery, setSearchQuery] = useState<string>(searchQueryFromURL);

  useEffect(() => {
    const fetchCategoriesWithFoods = async () => {
      try {
        const data = await getCategoriesWithFoods();
        setCategoriesWithFoods(data);
      } catch (error) {
        console.error("Error fetching categories and foods:", error);
      }
    };

    fetchCategoriesWithFoods();
  }, []);

  const handleCategorySelection = (categoryName: string) => {
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(categoryName)) {
        return prevSelected.filter((name) => name !== categoryName);
      } else {
        return [...prevSelected, categoryName];
      }
    });
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
  };

  const filteredFoods = categoriesWithFoods
    .filter(
      (category) =>
        selectedCategories.includes(category.name) ||
        selectedCategories.length === 0
    )
    .flatMap((category) => category.foods)
    .filter((food) =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  useEffect(() => {
    setSearchQuery(searchQueryFromURL); // Update search query if the URL changes
  }, [searchQueryFromURL]);

  filteredFoods.sort((a, b) => {
    if (sortOption === "az") {
      return a.name.localeCompare(b.name);
    } else if (sortOption === "za") {
      return b.name.localeCompare(a.name);
    } else if (sortOption === "lowhigh") {
      return a.price - b.price;
    } else if (sortOption === "highlow") {
      return b.price - a.price;
    }
    return 0;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentFoods = filteredFoods.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const totalPages = Math.ceil(filteredFoods.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div>
        <div
          className=" pt-[150px] lg:pt-0 w-full bg-no-repeat bg-center flex justify-center  "
          style={{
            backgroundImage: "url('/unsplash.png')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            height: "300px",
          }}
        >
          <div className="w-full max-w-5xl flex flex-col justify-center items-center text-white text-center py-16">
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Our Shop
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="/" className="text-xl sm:text-2xl md:text-3xl">
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
                  href="/shop"
                  className="ml-2 text-xl sm:text-2xl md:text-3xl text-[#FF9F0D]"
                >
                  Our Shop
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className="max-w-[1320px] mx-auto py-[20px] lg:py-[50px] px-[20px] lg:px-[60px] text-black body-font bg-white">
          <div className="md:grid md:grid-cols-4 gap-4 flex flex-col-reverse">
            <div className="col-span-full md:col-span-3 p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[10px] gap-y-4 min-h-[600px]">
                {currentFoods.length > 0 ? (
                  currentFoods.map((food) => (
                    <a
                      href={`/shop/${food._id}`}
                      className="flex flex-col items-center md:items-start gap-y-[10px] border border-transparent hover:border-[#FF9F0D] rounded-lg transition duration-300"
                      key={food._id}
                    >
                      <div className="w-[100%] h-[200px]">
                        <img
                          src={food.imageUrl}
                          className="w-[100%] h-[100%] object-cover rounded-[10px]"
                          alt={food.name}
                        />
                      </div>
                      <div className="flex flex-col items-center md:items-start w-full">
                        <h4 className="text-[18px] font-bold text-[#333333]">
                          {food.name}
                        </h4>
                        <div className="flex">
                          <p className="text-[16px] font-normal text-[#FF9F0D]">
                            ${food.price}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))
                ) : (
                  <div className="col-span-full text-center text-gray-500">
                    No food items found.
                  </div>
                )}
              </div>

              <div className="flex gap-4 justify-center items-center mt-[50px]">
                <CustomPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onChange={handlePageChange}
                />
              </div>
            </div>

            <div className="flex gap-y-[30px] flex-col items-center md:items-start col-span-full md:col-span-1 p-4 text-[#333333]">
              <div className="w-full max-w-md">
                <SearchBar query={searchQuery} setQuery={setSearchQuery} />
              </div>
              <div className="flex gap-[10px] items-center md:items-start">
                <h3 className="font-bold text-[20px] p-0 m-0">Sort By:</h3>
                <div className="sort-dropdown">
                  <Dropdown className="">
                    <DropdownTrigger className="min-w-[120px] hover:bg-[#FF9F0D] hover:text-white border border-[#FF9F0D]">
                      <Button variant="bordered">
                        {sortOption === "az" && "A-Z"}
                        {sortOption === "za" && "Z-A"}
                        {sortOption === "lowhigh" && "Low-High"}
                        {sortOption === "highlow" && "High-Low"}
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      aria-label="Static Actions"
                      className="bg-white text-[#FF9F0D] border border-[#FF9F0D] min-w-[120px]"
                    >
                      <DropdownItem
                        key="az"
                        onPress={() => handleSortChange("az")}
                        className="hover:bg-[#FF9F0D] hover:text-white"
                      >
                        A-Z
                      </DropdownItem>
                      <DropdownItem
                        key="za"
                        onPress={() => handleSortChange("za")}
                        className="hover:bg-[#FF9F0D] hover:text-white"
                      >
                        Z-A
                      </DropdownItem>
                      <DropdownItem
                        key="lowhigh"
                        onPress={() => handleSortChange("lowhigh")}
                        className="hover:bg-[#FF9F0D] hover:text-white"
                      >
                        Low-High
                      </DropdownItem>
                      <DropdownItem
                        key="highlow"
                        onPress={() => handleSortChange("highlow")}
                        className="hover:bg-[#FF9F0D] hover:text-white"
                      >
                        High-Low
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start w-full">
                <h3 className="font-bold text-[20px] ">Categories</h3>
                <div className="flex flex-col sm:flex-row md:flex-col justify-around md:justify-start my-[15px] w-unset sm:w-full">
                  {categoriesWithFoods.map((category) => (
                    <Checkbox
                      key={category._id}
                      checked={selectedCategories.includes(category.name)}
                      onChange={() => handleCategorySelection(category.name)}
                    >
                      <p className="m-0 p-0 py-[5px] text-[18px] font-normal">
                        {category.name}
                      </p>
                    </Checkbox>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      ;
    </>
  );
}
