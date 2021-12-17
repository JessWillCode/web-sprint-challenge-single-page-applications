import React from "react";

export default function PizzaForm (props){
    const {
        values,
        submit,
        change,
        disabled,
        errors
    } = props

    const onSubmit = e => {
        e.preventDefault()
        submit()
    }

    const onChange = e => {
        const { name, value, checked, type } = e.target
        const ValueToUse = type === 'checkbox' ? checked : value;
        change(name, ValueToUse)
    }

    return (
            <form id='pizza-form' className='form container' onSubmit={onSubmit}>
                <div className='form'>
                    <div className='form-header'>
                    <h4>Build Your Own Pizza</h4>
                    <img
                    className='pizza-image'
                    src='..../assets.pizza.jpg'
                    alt='This is a pizza'
                    />
                    </div>
                <h2>Build Your Own Pizza</h2>

                <div className='name-title'>
                    <h3>Name</h3>
                    <div>{errors.name}</div>
                </div>
                <div className='name-text'>
                    <input 
                    id='name-input'
                    type='text'
                    name='name'
                    placeholder='What is your name?'
                    value={values.special}
                    onChange={onChange}
                    />
                </div>
        
                <div className='size-title'>
                    <h3>Choice of Size</h3>
                    <div>{errors.size}</div>
                </div>
                <div className='size-drop'>
                    <select
                    id='size-dropdown'
                    onChange={onChange}
                    value={values.size}
                    name='size'
                    >
                        <option value=''>-- Select a Size --</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </div>
        
                <div className='topping-title'>
                    <h3>Add Toppings</h3>
                    <div>{errors.toppings}</div>
                </div>
                <div className='topping-check'>
                    <label>pepperoni
                        <input 
                        type='checkbox'
                        name='pepperoni'
                        checked={values.pepperoni}
                        onChange={onChange}
                        />  
                    </label>
                
                    <label>sausage
                        <input 
                        type='checkbox'
                        name='sausage'
                        checked={values.sausage}
                        onChange={onChange}
                        />  
                    </label>
            
                    <label>black olives
                        <input 
                        type='checkbox'
                        name='black olives'
                        checked={values.blackOlives}
                        onChange={onChange}
                        />  
                    </label>
            
                    <label>banana peppers
                        <input 
                        type='checkbox'
                        name='banana peppers'
                        checked={values.bananaPeppers}
                        onChange={onChange}
                        />  
                    </label>
            
                    <label>chicken
                        <input 
                        type='checkbox'
                        name='chicken'
                        checked={values.chicken}
                        onChange={onChange}
                        />  
                    </label>
            
                    <label>ham
                        <input 
                        type='checkbox'
                        name='ham'
                        checked={values.ham}
                        onChange={onChange}
                        />  
                    </label>
            
                    <label>pineapple
                        <input 
                        type='checkbox'
                        name='pineapple'
                        checked={values.pineapple}
                        onChange={onChange}
                        />  
                    </label>
                </div>
        
                <div className='special-title'>
                    <h3>Special Instructions</h3>
                    <div>{errors.special}</div>
                </div>
                <div className='special-text'>
                    <input 
                    id='special-text'
                    type='text'
                    name='special instructions'
                    placeholder='Anything else you want to add?'
                    value={values.special}
                    onChange={onChange}
                    />
                </div>
        
                <div className='submits'>
                    <button id='order-button' disabled={disabled}>Add to Order</button>
                </div>
            </div>
        </form>
    )
}