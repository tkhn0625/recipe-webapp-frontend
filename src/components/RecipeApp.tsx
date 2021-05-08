// eslint-disable-next-line no-use-before-define
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./util/Header";
import Footer from "./util/Footer";
import Home from "./home/Home";
import RecipeList from './list/RecipeList'
import { Route, Switch } from "react-router";

const RecipeApp = () => {
  return (
    <div>
      <Router>
        <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recipes" component={RecipeList} />
          </Switch>
        <Footer />
      </Router>
    </div>
  )
};

export default RecipeApp;
