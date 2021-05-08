import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
        <Button variant="contained" color="primary" component={Link} to="/recipes">
          レシピ一覧
        </Button>
    </div>
  );
}

export default Home;
