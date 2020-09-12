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

export default function App() {
  const [neworders, setNewOrders] = useState([])
  const [formValues, setFormValues] = useState(beginningFormValues)
  const [disabled, setDisabled] = useState(false)
  const [errors, setErrors] = useState(beginningFormErrors)


const onInputChange = event => {
  const { name, value } = event.target 

  Yup
    .reach(Formschema, name)
    .validate(value)
    .then(() => {
      setErrors({
        ...errors, [name]: ""
      })
    })
    .catch(err => {
      setErrors({
        ...errors, [name]: err.errors[0]
      })
    })

  setFormValues({
    ...formValues, [name]: value
  })
}

const onCheckboxChange = event => {
  const { name, checked } = event.target
  setFormValues({
    ...formValues,
    toppings: {
      ...formValues.toppings, [name]: checked,
    }
  })
}

const onSubmit = event => {
  event.preventDefault() 

  const newOrder = {
    size: formValues.size.trim(),
    instructions: formValues.instructions.trim(),
    name: formValues.name.trim(),
    toppings: Object.keys(formValues.toppings).filter(topping => formValues.toppings[topping] === true)
  }
  setNewOrders([...neworders, newOrder])
}


