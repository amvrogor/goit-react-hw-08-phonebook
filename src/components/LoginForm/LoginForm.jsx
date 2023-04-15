import { useDispatch } from 'react-redux';
import { Formik, Field } from 'formik';
import { validateSchema } from 'components/validateSchema';
import { logIn } from 'redux/operations';

import {
  Form,
  FormField,
  ErrorMessage,
  SubmitButton,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validateSchema}
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
