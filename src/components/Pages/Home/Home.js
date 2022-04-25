import React from "react";

import ProductList from "../../ProductList/ProductList";
import classes from "./Home.module.scss";

function Home() {
  return (
    <div className={classes.homeContainer}>
      <ProductList />
    </div>
  );
}

export default Home;
