import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import {retrieveAllRecipes} from '../../api/RecipeDataService'
import RecipeItem from '../list/RecipeItem'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const RecipeList = () => {
  const classes = useStyles();

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
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4} justify='center'>
          {recipeItem.map((recipe,index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <RecipeItem getRecipes = {recipe} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default RecipeList;
