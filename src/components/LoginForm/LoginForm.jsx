import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
});

const initialValues = {
  email: '',
  password: '',
};

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off" className={css.form}>
        <label className={css.label}>
          Email
          <Field type="email" name="email" className={css.input}/>
          <ErrorMessage name="email" component="div" className={css.error} />
        </label>

        <label className={css.label}>
          Password
          <Field type="password" name="password" className={css.input}/>
          <ErrorMessage name="password" component="div" className={css.error}/>
        </label>

        <button type="submit" className={css.button}>Login</button>
      </Form>
    </Formik>
  );
}
