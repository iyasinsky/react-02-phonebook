import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
// import { FormField } from './ContactForm.styled';

const ContactFormSchema = Yup.object().shape({
  name: Yup.string().required('Required field!'),
  number: Yup.number().required('Required field!'),
});

export const ContactForm = ({ onSaveContact }) => {
  return (
    <div>
      <h1>Phonebook</h1>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={ContactFormSchema}
        onSubmit={(values, actions) => {
          onSaveContact({ ...values, id: nanoid() });
          actions.resetForm();
        }}
      >
        <Form>
          <label>
            Name
            <Field name="name" placeholder="Enter your name" />
            <ErrorMessage name="name" component="div" />
          </label>
          <br />
          <label>
            Number
            <Field name="number" placeholder="Enter your phone number" />
            <ErrorMessage name="number" component="div" />
          </label>
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

// Field name="number" type='tel' !!!
