import React, { useEffect, useState } from 'react';
import {retrieveAllRecipes} from '../../api/RecipeDataService'
import RecipeItem from '../list/RecipeItem'

const RecipeList = () => {

  const [recipeItem, setItem] = useState<Recipes[]>(
    [{
      id: 0,
      name: "",
      createdAt: "",
      updatedAt: "",
      mainImages: [{
                    id: 0,url: "",recipeId: ""
                  }]
    }]
  );
  useEffect(()=>{
    retrieveAllRecipes().then((recipes)=>{
      setItem(recipes.recipes)
    })
  })
  return (
    <div>
      {
        recipeItem.map((recipe,index)=>{
          return (
          <RecipeItem key={index} getRecipes = {recipe} />
        )})
      }
    </div>
  );
};

export default RecipeList;
