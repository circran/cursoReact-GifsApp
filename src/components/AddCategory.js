import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (newValue) => {
        setInputValue(newValue.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(categories => [inputValue, ...categories]);
            setInputValue('');
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <input
        name='nombre' 
        type="text" 
        value={inputValue}
        onChange={handleInputChange}/>
    </form>
  )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}
