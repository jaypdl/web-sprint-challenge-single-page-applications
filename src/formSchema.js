import * as yup from 'yup';

export default yup.object().shape({
  name: yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  pizzaSize: yup.string()
    .oneOf(['small','medium','large','xl'], 'Size Required'),
  sauce: yup.string()
    .oneOf(['original','alfredo','garlic','bbq'],'Sauce Required'),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  chicken: yup.boolean(),
  pineapple: yup.boolean(),
  mushrooms: yup.boolean(),
  instructions: yup.string(),


})