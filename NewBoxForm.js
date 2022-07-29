import React from "react";
import {useState} from "react";
import {v4 as uuid } from 'uuid';

//NewBoxForm - this component should render a form that when submitted, 
//creates a new Box. You should be able to specify the Box’s width, height, 
//and background color. When the form is submitted, clear the input values.

const NewBoxForm = ({ addBox }) => {
    const initialBox = {
        backgroundColor: "",
        width: "",
        height:""
    }

    const[ formData , setFormData ] = useState(initialBox);
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(formData => ({...formData,  [name]: value}));
    }
    const handleSubmit = e => {
        e.preventDefault();
        addBox({ ...formData , id:uuid()});
        setFormData(initialBox);
    }

   

    return(
        <form onSubmit = { handleSubmit }>
            <label htmlFor="backgroundColor"> Box Color </label>
            <input 
                  id = "backgroundColor"
                  type ="text"
                  name ="backgroundColor"
                  placeHolder ="Box Color"
                  value = {formData.backgroundColor}
                  onChange = {handleChange}
            />
            <label htmlFor = "width"> Box Width : {formData.width} </label>
            <input
                  id ="width"
                  type = "range"
                  name ="width"
                  min = "1"
                  max ="15"
                  value = {formData.width}
                  onChange ={handleChange}
            />
            <label htmlFor ="height"> Box Height: {formData.height}</label>
            <input
                  id = "height"
                  type ="range"
                  name = "height"
                  min ="1"
                  max ="15"
                  value = {formData.height}
                  onChange ={handleChange}
            />

            <button id="newBoxButton"> Add Box </button>       
        </form>
    );
}

export default NewBoxForm;