import { client } from "./client";
import { ICategory } from "./interfaces";
import { ICategoryWithFoods } from "./interfaces"; 
import { IFoodItem } from "./interfaces"; 

export const getAllCategories = async () => {
  try {
    const getAllCategoriesQuery = `*[_type == "category" && available == true] {
            _id,
            name,
            "imageUrl": image.asset->url,
            available
          }
          `;

    const categories: ICategory[] = await client.fetch(getAllCategoriesQuery, {}, { next: { revalidate: 1800 } });
    return categories;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch categories. Please try again later.");
  }
};


export const getCategoriesWithFoods = async (): Promise<ICategoryWithFoods[]> => {
  try {
    const query = `*[_type == "category" && available == true] {
      _id,
      name,
      "imageUrl": image.asset->url,
      available,
      "foods": *[_type == "food" && references(^._id) && available == true] {
        _id,
        name,
        price,
        "imageUrl": image.asset->url,
        description,
        available
      }
    }`;

    const categoriesWithFoods: ICategoryWithFoods[] = await client.fetch(query, {}, { next: { revalidate: 1800 } });
    return categoriesWithFoods;
  } catch (error) {
    console.error("Error fetching categories with foods:", error);
    throw new Error("Failed to fetch categories with foods. Please try again later.");
  }
};


export const getFoodItemById = async (slug: string) => {
  const query = `*[_type == "food" && _id == $slug][0] {
    _id,
    name,
    price,
    "category": category->name,
    stock,
    description,
    "mainImageUrl": image.asset->url, // Resolve the main image URL
    "images": images[].asset->url         // Resolve the array of image URLs
  }`;

  const foodItem:IFoodItem = await client.fetch(query, { slug }, { next: { revalidate: 0 } });
  if (foodItem) {
    const mainImageUrl = foodItem.mainImageUrl || '/default-image.jpg';
    foodItem.images = [mainImageUrl, ...(foodItem.images || [])];
  }
  return foodItem;
};

