import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import PizzaMaker from './Components/PizzaMaker';
import Home from './Components/Home';
import axios from 'axios';
import * as yup from 'yup';
import schema from './formSchema';

const initialFormValues = {
  name: '',
  pizzaSize:'',
  sauce:'',
  pepperoni: false,
  sausage: false,
  chicken: false,
  pineapple: false,
  mushrooms: false,
  instructions:'',
}


const App = () => {
  
  const [disabled, setDisabled] = useState(true);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [order, setOrder] = useState([]);

  const updateForm = (name, value) => {
    setFormValues({...formValues, [name]:value})
  }

  // const addToOrder = () => {
  //   postPizza(formValues);
  // }

  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  },[formValues])

  const postPizza = () => {
    axios
      .post('https://reqres.in/api/users', formValues)
      .then(res => {
        console.log('The server responded: ', res)
        setOrder([...order, res.data]);
        console.log('The order so far:', order)
      })
      .catch(err => {
        console.log('Error! ', err);
        debugger;
      })
      .finally(() => {
        
        setFormValues(initialFormValues);
      })
  }


  return (
    <div>
      <h1>Lambda Eats</h1>
      <p>We've got the food that coders crave!</p>
      <nav>
        <Link to='/'>Home</Link>
        <br />
        <Link to='/pizza'>Pizza?!</Link>
      </nav>
      <Switch>
        <Route path={'/pizza'}>
          <PizzaMaker values={formValues} updateForm={updateForm} submit={postPizza} disabled={disabled} />
        </Route>
        <Route path={'/'}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
