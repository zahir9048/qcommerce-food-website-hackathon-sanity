
export interface ICategory {
  _id: string; 
  name: string;
  imageUrl: string; 
  available: boolean; 
}

export interface IFood {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  available: boolean;
}

export interface ICategoryWithFoods {
  _id: string;
  name: string;
  imageUrl: string;
  available: boolean;
  foods: IFood[];
}

