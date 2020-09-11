import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";
import Formschema from "./Formschema";
import * as Yup from "yup";

const beginningFormValues = {
  size: "",
  instructions: "",
  name: "",
  toppings: {
    pepperoni: false,
    peppers: false,
    mushrooms: false,
    sausage: false,
    onion: false,
  }
}

const beginningFormErrors = {
  size: "",
  instructions: "",
  name: "",
}

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
