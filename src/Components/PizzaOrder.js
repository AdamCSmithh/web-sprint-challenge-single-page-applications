
import React, { useState, useEffect } from "react";
import * as yup from 'yup';
import axios from 'axios';



const yupForm = yup.object().shape({
    name: yup.string().required('name is required').min(2, 'minimum of 2 characters'),
    sauce: yup.string().oneOf(['tomato', 'bbq', 'alfredo'], 'Pick One'),
    size: yup.string().oneOf(['Small', 'Medium', 'Large', 'Extra Large'], 'Please pick a size!'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    ham: yup.boolean(),
    bacon: yup.boolean(),
    tomatoes: yup.boolean(),
    mushroom: yup.boolean(),
    redOnions: yup.boolean(),
    anchovies: yup.boolean(),
    
})

const pizzaForm = {
  name: "",
  sauce: "",
  size: "",
  pepperoni: false,
  sausage: false,
  ham: false,
  bacon: false,
  tomatoes: false,
  mushroom: false,
  redOnions: false,
  anchovies: false,
}

function Form() {

const [isValid, setIsValid] = useState(true);

const [form, setForm] = useState(pizzaForm);

const [toppings, setToppings] = useState({
    name: "",
    sauce: "",
    size: "",
    pepperoni: "",
    sausage: "",
    ham: "",
    bacon: "",
    tomatoes: "",
    mushroom: "",
    redOnions: "",
    anchovies: "",
})

useEffect(() => {yupForm.isValid(form)
  .then(valid => {
    setIsValid(!valid)
  });
  }, [form]);


const validate = (event) => {
 yup.reach(yupForm, event.target.name)
 .validate(event.target.value)
 .then(error => {
  setToppings({
      ...toppings,
      [event.target.name]: ""
    })

 })
 .catch(error => {
   console.log(error.errors)
 })
};

const inputChange = event => {
  event.persist();
  validate(event)
  let value = event.target.type === "checkbox" ? event.target.checked : event.target.value
  setForm({...form, [event.target.name]: value });
};

const formSubmit = (event) => {
  event.preventDefault();
  setForm(pizzaForm)
};

return (
  <div>
    <h1>ORDER BELOW!</h1>

<form onSubmit={formSubmit} id="pizza-form">
  <label htmlFor="name">Name: </label>
  <input 
    id="name-input" 
    name="name"
    type="text" 
    placeholder="Name" 
    value={form.name} 
    onChange={inputChange} 
  />

<p><label htmlFor="sauce">Choose Your Sauce:</label></p>
  <input 
    type="radio" 
    value="tomato" 
    name="sauce" 
    checked={form.sauce === "tomato"} 
    onChange={inputChange} 
  /> Tomato
  <input 
    type="radio" 
    value="bbq" 
    name="sauce" 
    checked={form.sauce === "bbq"} 
    onChange={inputChange} 
  /> BBQ
  <input 
    type="radio" 
    value="alfredo" 
    name="sauce" 
    checked={form.sauce === "alfredo"} 
    onChange={inputChange} 
  /> Alfredo

<p><label htmlFor="size-dropdown">Choose Size -- </label>
  <select id="size-dropdown" name="size" value={form.size} onChange={inputChange}>
      <option>Choose Here</option>
      <option value="Small">Small</option>
      <option value="Medium">Medium</option>
      <option value="Large">Large</option>
      <option value="Extra Large">Extra Large</option>
    </select>
  </p>


  <label htmlFor="toppings">Choose Toppings:</label>
<p>
    <div>
<label><strong>Meats</strong></label>
    </div>
  <input 
    id="toppings"  
    type="checkbox"  
    checked={form.pepperoni} 
    onChange={inputChange}  
    name="pepperoni" 
  />Pepperoni
  <input 
    id="toppings" 
    type="checkbox" 
    checked={form.sausage} 
    onChange={inputChange} 
    name="sausage" 
  />Sausage
  <input 
    id="toppings" 
    type="checkbox" 
    checked={form.ham} 
    onChange={inputChange} 
    name="ham" 
  />Ham
  <input id="toppings" 
    type="checkbox" 
    checked={form.bacon} 
    onChange={inputChange} 
    name="bacon" 
  />Bacon
     <div>
<label><strong>Toppings</strong></label>
    </div>
  <input 
    id="toppings" 
    type="checkbox" 
    checked={form.tomatoes} 
    onChange={inputChange} 
    name="tomatoes" 
  />Tomatoes
  <input 
    id="toppings" 
    type="checkbox" 
    checked={form.mushroom} 
    onChange={inputChange} 
    name="mushroom" 
  />Mushroom
  <input 
    id="toppings" 
    type="checkbox" 
    checked={form.redOnions} 
    onChange={inputChange} 
    name="redOnions" 
  />Red Onions
  <input 
    id="toppings" 
    type="checkbox" 
    checked={form.anchovies} 
    onChange={inputChange} 
    name="anchovies" 
  />Anchovies
  </p>
  <button name="order-button" id="order-button" disabled={isValid} type="submit">
    Submit Order
  </button>

</form>
</div>
);
}


export default Form;