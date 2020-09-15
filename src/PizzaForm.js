import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import { Button } from 'reactstrap';

const PizzaForm = () => {

    const newPizza = { //variable for blank pizza
        name: "",
        size: "",
        pepperoni: false,
        bananapeppers: false,
        sausage: false,
        onions: false,
        spinach: false,
        special: ""
    }

    const [otherPizza, setOtherPizza] = useState([]);    
    const [buttonDisabled, setButtonDisabled] = useState(true) //state for our button
    const [errors, setErrors] = useState({ //state for our  
        name: "",
        size: "",
        pepperoni: "",
        bananapeppers: "",
        sausage: "",
        onions: "",
        spinach: "",
        special: ""
    });

    //Schema Object
    const pizzaSchema = yup.object().shape({
        name:yup.string().test('Must include name longer than 2 characters', val => val.length > 2),
        size:yup.boolean().oneOf(["Personal, Small, Medium, Large"]),
        pepperoni: yup.boolean().oneOf([true,false]),
        bananapeppers: yup.boolean().oneOf([true,false]),
        sausage: yup.boolean().oneOf([true,false]),
        onions: yup.boolean().oneOf([true,false]),
        spinach: yup.boolean().oneOf([true,false]),
        special: yup.string()
    })

    const validateChange = (e) => {
        yup
        .reach(pizzaSchema, e.target.name) 
        .validate(e.target.value)
        .then(valid => {
            setErrors({...errors, [e.target.name]: ""})
            console.log('success')
        })
        .catch(err => {
            console.log(err);
            setErrors({...errors,[e.target.name]:err.errors[0] })
        })
    }


    const [formState, setForm] = useState(newPizza);

    //on change function and validation callback
    const inputChange = e => {
        e.persist();
        const newFormData = {
            ...formState, [e.target.name] : e.target.type === "checkbox" ? e.target.checked : e.target.value
        }
        validateChange(e);
        setForm(newFormData);
    }

    //function to submit to the database
    const formSubmit = e => {
        e.preventDefault();
        console.log("form submitted");
        axios
        .post("https://reqres.in/api/users", formState)
        .then(resp => {
            console.log(resp.data);
        })
        .catch(err=>console.log(err));
    };

    //use effect function
    useEffect(() => {
        if(formState.name.length < 2){
            setButtonDisabled(true);
        }else{setButtonDisabled(false)}
    }, [formState]);

return (<div className="orderForm">
    <form onSubmit = {formSubmit} />   

        <label htmlFor= "name">
            Name: 
            <input type="text" name="name" value={formState.name} onChange={inputChange} date-cy="username" />
            {errors.name.length > 2 ? <p>{errors.name}</p> : null}
        </label>

        <div>
            <label htmlFor="size">
                Size: 
                <select name ="size" date-cy="size">
                    <option value = "Personal" data-cy="Personal">Personal</option>
                    <option value = "Small" data-cy="Small">Small</option>
                    <option value = "Medium" data-cy="Medium">Medium</option>
                    <option value = "Large" data-cy="Large">Large</option>
                </select>
            </label>
        </div>

        <div>
            <h2>Select Your Favorite Toppings!</h2>

            <li>
            <label htmlFor= "pepperoni">
                <input type= "checkbox" checked= {formState.pepperoni} value= {formState.pepperoni} name="pepperoni" onChange={inputChange} data-cy="pepperoni" />
                Pepperoni
            </label>
            </li>

            <li>
            <label htmlFor= "bananapeppers">
                <input type= "checkbox" checked= {formState.bananapeppers} value= {formState.bananapeppers} name="bananapeppers" onChange= {inputChange} data-cy="bananapeppers" />
                Banana Peppers
            </label>
            </li>

            <li>
            <label htmlFor= "sausage">
                <input type= "checkbox" checked= {formState.sausage} value= {formState.sausage} name="sausage" onChange= {inputChange} data-cy="sausage" />
                Sausage
            </label>
            </li>

            <li>
            <label htmlFor= "onions">
                <input type= "checkbox" checked= {formState.onions} value= {formState.onions} name="onions" onChange= {inputChange} data-cy="onions" />
                Onions
            </label>
            </li>

            <li>
            <label htmlFor= "spinach">
                <input type= "checkbox" checked= {formState.spinach} value= {formState.spinach} name="spinach" onChange= {inputChange} data-cy="spinach" />
                Spinach
            </label>
            </li>    
        </div>

        <label htmlFor= "special">
            <p>
                Are there special instructions for your order?
            </p>
            <textarea name="special" value = {formState.special} onChange= {inputChange} data-cy="special"/>
            {errors.special.length > 2 ? <p>{errors.special}</p> : null} 
        </label>

        <div className="submit">
            <label>Enter Name:&nbsp;
                <input
                    value={formState.name}
                    type="text"
                    name="name"
                    onChange={inputChange}
                />
            </label>

        <Button disabled = {buttonDisabled} onClick={formSubmit} color = "primary" data-cy="submit">Submit</Button>
        <pre> Confirmation {JSON.stringify(otherPizza, null, 2)}</pre>
        </div>
    </div>
  )
}

export default PizzaForm;