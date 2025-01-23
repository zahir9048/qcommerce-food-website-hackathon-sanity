import { getFoodItemById } from "@/sanity/lib/data";
import ImageGallery from "@/app/components/imageGallery";
import { IFoodItem } from "@/sanity/lib/interfaces";
import AddToCartButton from "@/app/components/addToCartButton";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default async function FoodDetail({ params }: ProductPageProps) {
  const { slug } = params; // Get the slug from the URL
  const foodItem: IFoodItem = await getFoodItemById(slug);
  if (!foodItem) {
    return <div>Product not found</div>; // Handle invalid slug
  }

  return (
    <div className="max-w-[1320px] pt-[150px]  mx-auto py-[20px] lg:py-[50px] px-[20px] lg:px-[60px] text-black body-font bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div>
          <ImageGallery
            mainImageUrl={foodItem.mainImageUrl}
            images={foodItem.images}
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{foodItem.name}</h1>
          <p className="text-gray-700 mb-2"> {foodItem.description}</p>
          <p className="text-gray-700 mb-2"> {foodItem.price}$</p>
          <p className="text-gray-700 mb-2"> {foodItem.category}</p>
          <p className="text-gray-700 mb-2">
            Remaining Items: {foodItem.stock}
          </p>
          {/* <button className="bg-[#FF9F0D] text-white px-4 py-2 rounded">
            Add to Cart
          </button> */}
          <AddToCartButton product={foodItem} />
        </div>
      </div>
    </div>
  );
}
