import { useDispatch } from 'react-redux';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { logIn } from 'redux/operations';

import {
  Form,
  FormField,
  ErrorMessage,
  SubmitButton,
} from './LoginForm.styled';

const validationSchema = Yup.object({
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string('Enter your password')
    .min(7, 'Password should be of minimum 7 characters length')
    .required('Password is required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        dispatch(
          logIn({
            email: values.email,
            password: values.password,
          })
        );
        actions.resetForm();
      }}
    >
      <Form>
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
        <SubmitButton type="submit">Log In</SubmitButton>
      </Form>
    </Formik>
  );
};
