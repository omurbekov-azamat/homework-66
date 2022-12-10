export interface GotMeal {
  category: string;
  description: string;
  calories: string;
}

export interface GotMealApi extends GotMeal {
  id: string;
}

export interface GotMealList {
  [id: string]: GotMealApi;
}
