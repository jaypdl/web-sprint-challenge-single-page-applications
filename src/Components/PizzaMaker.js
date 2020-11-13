import React from 'react'

export default function PizzaMaker(props) {
  const { values, updateForm, submit, disabled, errors } = props;

  const onSubmit = event => {
    event.preventDefault()
    submit()
  }

  const onChange = event => {
    const { name, value, type, checked, } = event.target
    const valueToUse = type === 'checkbox' ? checked : value;
    updateForm(name, valueToUse);
  }

  return(
    <div>
      <h1>Pizza Maker Deluxe</h1>
      <div className='pizzaHero'>
        <img src='../../Assets/Pizza.jpg' alt='Yummy Pizza'/>
      </div>
      <h2>Let's make your dreams come true</h2>

      <form onSubmit={onSubmit}>
      <div className='name pizzaSection'>
            <h3>Who is this pizza for?</h3>
          <label>
            <input
            type='text'
            value={values.name}
            name='name'
            onChange={onChange}
            />
          </label>
        </div>
        <div className='pizzaSize pizzaSection'>
          <h3>Choice of Size</h3>
          <p>Required</p>
          <label>
            <select
              onChange={onChange}
              value={values.pizzaSize}
              name='pizzaSize'
            >
              <option value=''>--Select a Size--</option>
              <option value='small'>Small</option>
              <option value='medium'>Medium</option>
              <option value='large'>Large</option>
              <option value='xl'>Extra Large</option>
            </select>
          </label>
        </div>
        <div className='sauceChoice pizzaSection'>
          <h3>Choice of Sauce</h3>
          <p>Required</p>
          <label>
            Original Red
            <input
            type='radio'
            name='sauce'
            value='original'
            checked={values.sauce === 'original'}
            onChange={onChange}
            />
          </label>
          <br/>
          <label>
            Alfredo Dreams
            <input
            type='radio'
            name='sauce'
            value='alfredo'
            checked={values.sauce === 'alfredo'}
            onChange={onChange}
            />
          </label>
          <br/>
          <label>
            Garlic Forest
            <input
            type='radio'
            name='sauce'
            value='garlic'
            checked={values.sauce === 'garlic'}
            onChange={onChange}
            />
          </label>
          <br/>
          <label>
            BBQ Sensation
            <input
            type='radio'
            name='sauce'
            value='bbq'
            checked={values.sauce === 'bbq'}
            onChange={onChange}
            />
          </label>
        </div>
        <div className='toppings pizzaSection'>
          <h3>Add Toppings</h3>
          <p>Your Choice!</p>
          <label>
            Pepperoni
            <input 
            type='checkbox'
            name='pepperoni'
            checked={values.pepperoni}
            onChange={onChange}
            />
          </label>
          <br/>
          <label>
            Sausage
            <input 
            type='checkbox'
            name='sausage'
            checked={values.suasage}
            onChange={onChange}
            />
          </label>
          <br/>
          <label>
            Chicken
            <input 
            type='checkbox'
            name='chicken'
            checked={values.chicken}
            onChange={onChange}
            />
          </label>
          <br/>
          <label>
            Pineapple
            <input 
            type='checkbox'
            name='pineapple'
            checked={values.pineapple}
            onChange={onChange}
            />
          </label>
          <br/>
          <label>
            Mushrooms
            <input 
            type='checkbox'
            name='mushrooms'
            checked={values.mushrooms}
            onChange={onChange}
            />
          </label>
        </div>
        <div className='instructions pizzaSection'>
            <h3>Any Special Instructions?</h3>
          <label>
            <input
            type='text'
            value={values.instructions}
            name='instructions'
            onChange={onChange}
            />
          </label>
        </div>
        <br/>
        <button disabled={disabled}>Submit my order!!</button>
        <br/>
        <br/>
      </form>
    </div>
  )
}