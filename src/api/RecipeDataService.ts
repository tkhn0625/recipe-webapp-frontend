import axios, { AxiosError } from 'axios';
import { API_URL } from '../Constants';

// class RecipeDataService{
//     retrieveAllRecipes=()=>{
//         return axios.get(`${API_URL}/recipes/list`)
//     }

//     retrieveRecipe(id: string){
//         return axios.get(`${API_URL}/recipes/${id}`);
//     }
// }

// export default new RecipeDataService();
interface IRecipe {
  recipes: Array<Recipes>;
}

// レスポンスの型定義。
interface IResponse {
  data: IRecipe;
  error: AxiosError;
  loading: boolean;
}

export const retrieveAllRecipes = async (): Promise<IRecipe> => {
  try {
    const res = await axios.get<IRecipe>(`${API_URL}/recipes/list`);
    const data = res.data;
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
