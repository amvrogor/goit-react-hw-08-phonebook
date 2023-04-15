import { useDispatch } from 'react-redux';
import { Formik, Field } from 'formik';
import { validateSchema } from 'components/validateSchema';
import { register } from 'redux/operations';

import {
  Form,
  FormField,
  ErrorMessage,
  SubmitButton,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={validateSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        dispatch(
          register({
            name: values.name,
            email: values.email,
            password: values.password,
          })
        );

        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          Username
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </FormField>
        <FormField>
          Email
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="span" />
        </FormField>
        <FormField>
          Password
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="span" />
        </FormField>
        <SubmitButton type="submit">Register</SubmitButton>
      </Form>
    </Formik>
  );
};

// export const RegisterForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       register({
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit} autoComplete="off">
//       <label>
//         Username
//         <input type="text" name="name" />
//       </label>
//       <label>
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label>
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Register</button>
//     </form>
//   );
// };
