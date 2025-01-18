export const category = {
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Category Name',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Category Image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'available',
        type: 'boolean',
        title: 'Currently Active',
        description: 'Availability status of the category',
      },
    ],
  };
  