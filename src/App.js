import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function App() {
  return (
    <Formik
      initialValues={{
        to: '',
        subject: '',
        message: '',
        attachment: null
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <Form>
          <label htmlFor="to">Người nhận:</label>
          <Field type="email" id="to" name="to" />
          <ErrorMessage name="to" />

          <label htmlFor="subject">Chủ đề:</label>
          <Field type="text" id="subject" name="subject" />
          <ErrorMessage name="subject" />

          <label htmlFor="message">Nội dung:</label>
          <Field as="textarea" id="message" name="message" />
          <ErrorMessage name="message" />

          <label htmlFor="attachment">File đính kèm:</label>
          <Field type="file" id="attachment" name="attachment" />
          <ErrorMessage name="attachment" />

          <button type="submit">Gửi email</button>
        </Form>
      )}
    </Formik>
  );
}

export default App;