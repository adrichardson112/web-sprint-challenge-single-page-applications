import React, { useState } from "react";
import { Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Form from "./Form";

const App = () => {
  const [pizzaOrders] = useState([]); //set state for orders

  return (
    <div>
      <h1>Lambda Pizza Eats</h1>
      <NavBar />

      <Route exact path="/">
        <Home orders={pizzaOrders} />
      </Route>

      <Route path="/pizza">
        <Form />
      </Route>
    </div>
  );
};
