import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps'; 
import style from './ContactForm.module.css';

const initialValues = {
  name: '',
  number: '',
};

const feedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(newContact)); 
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={feedbackSchema}
    >
      <Form className={style.form}>
        <label className={style.label} htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" className={style.field} />
        <ErrorMessage name="name" component="div" className={style.error} />

        <label className={style.label} htmlFor={numberFieldId}>Number</label>
        <Field type="number" name="number" className={style.field} />
        <ErrorMessage name="number" component="div" className={style.error} />

        <button className={style.btn} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
