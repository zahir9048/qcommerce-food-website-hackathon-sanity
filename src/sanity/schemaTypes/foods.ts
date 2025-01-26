export const food = {
  name: "food",
  type: "document",
  title: "Food",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Food Name",
    },
    {
      name: "category",
      type: "reference",
      title: "Category",
      to: [{ type: "category" }], 
      description: "Select the category of the food item (e.g., Burger, Drink, etc.)",
    },
    {
      name: "price",
      type: "number",
      title: "Current Price",
    },
    {
      name: "originalPrice",
      type: "number",
      title: "Original Price",
      description: "Price before discount (if any)",
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Tags for categorization (e.g., Best Seller, Popular, New)",
    },
    {
      name: "image",
      type: "image",
      title: "Food Image",
      options: {
        hotspot: true,
      },
    },
    {  
      name: 'images',  
      type: 'array',  
      title: 'Food Item Images',  
      of: [{ type: 'image' }] // Array of images for the detail page 
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Short description of the food item",
    },
    {
      name: "available",
      type: "boolean",
      title: "Available",
      description: "Availability status of the food item",
    },
    {
      name: "stock",
      type: "number",
      title: "Stock",
      description: "Inventory",
    }
  ],
};
