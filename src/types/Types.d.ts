interface Recipes {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  mainImages: MainImage[];
}

interface MainImage{
  id: number;
  url: string;
  recipeId: string;
}

type GetRecipes = () => void;
