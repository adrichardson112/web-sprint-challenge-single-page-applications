import React from "react";

export default function Form(props) {
    const {
        values,
        onSubmit,
        onInputChange,
        onCheckboxChange,
        disabled,
        errors,
    } = props

    return (
        <form onSubmit={onSubmit}>
            <div className="errors">
                <div>{errors.size}</div>
                <div>{errors.instructions}</div>
                <div>{errors.name}</div>
            </div>
            <div>
                <h1>Build Your Own Pizza!</h1>
                <label>Size: 
                    <select
                        onChange={onInputChange}
                        value={values.role}
                        name='size'
                    >
                        <option value=''>Select Sizes Here</option>
                        <option value="Personal">Personal</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                        <option value="XL">Extra-Large</option>
                    </select>
                </label>
            </div>
            <div className="Toppings">
                <label>Pepperoni
                    <input 
                        name="Pepperoni"
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.toppings.pepperoni}
                    />
                </label>
                <label>Peppers
                    <input
                        name="Peppers"
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.toppings.peppers}
                    />
                </label>
                <label>Mushrooms
                    <input
                        name="Mushrooms"
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.toppings.mushrooms}
                    />
                </label>
                <label>Sausage
                    <input
                        name="Sausage"
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.toppings.sausage}
                    />
                </label>
                <label>Onion
                    <input
                        name="Onions"
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.toppings.onion}
                    />
                </label>
            </div>
            <div>
                <label>Special Instructions
                    <textarea
                        value={values.instructions}
                        name="Instructions"
                        type="text"
                        onChange={onInputChange}
                    />
                </label>
            </div>
            <div className="submit">
                <label>Enter Name Here:
                    <input
                        value={values.name}
                        type="text"
                        name="name"
                        onChange={onInputChange}
                    />
                </label>
                <button disabled={disabled}>Add to Your Order</button>
            </div>
        </form>
    )
}