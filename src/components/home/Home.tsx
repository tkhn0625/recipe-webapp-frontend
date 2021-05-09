import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FastfoodIcon from '@material-ui/icons/Fastfood';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
      <div style={{backgroundImage: "url(/static/images/home/back1.jpg)"}} className="box">
        <Button
        variant="contained"
        size="large"
        color="primary"
        className={classes.button}
        startIcon={<FastfoodIcon />}
        component={Link} to="/recipes"
        >
            レシピ一覧
        </Button>
        <br></br>
        <Button
        variant="contained"
        size="large"
        color="primary"
        className={classes.button}
        startIcon={<AddCircleIcon />}
        component={Link} to="/post"
        >
          レシピ新規登録
        </Button>
      </div>
  );
}

export default Home;
