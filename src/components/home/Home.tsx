import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
        <Button variant="contained" color="primary" component={Link} to="/recipes">
          レシピ一覧
        </Button>
        <br></br>
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<AddCircleIcon />}
        component={Link} to="/post"
      >
        Upload
      </Button>
    </div>
  );
}

export default Home;
