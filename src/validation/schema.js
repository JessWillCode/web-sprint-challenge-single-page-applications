import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required()
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .required()
        .oneOf(['small', 'medium', 'large'], 'must choose a size!'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    blackOlives: yup.boolean(),
    bananaPeppers: yup.boolean(),
    chicken: yup.boolean(),
    ham: yup.boolean(),
    pineapple: yup.boolean(),
    special: yup
        .string()
        .trim()
})

export default schema;