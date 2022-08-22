import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ContactForm = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
  phone: Yup.number(10, 'Invalid phone number')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export default function Contact() {
  return (
    <Container>
      <Row>
        <Col sm={6} xs={12}>
        <h1>Signup</h1>
     <Formik
       initialValues={{
         firstName: '',
         lastName: '',
         phone: '',
         email: '',
       }}
       validationSchema={ContactForm}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <div className='form-group'>
           <Field name="firstName" />
           {errors.firstName && touched.firstName ? (
             <div>{errors.firstName}</div>
           ) : null}
           </div>
           <Field name="lastName" />
           {errors.lastName && touched.lastName ? (
             <div>{errors.lastName}</div>
           ) : null}
           <Field name="phone" />
           {errors.phone && touched.phone ? (
             <div>{errors.phone}</div>
           ) : null}
           <Field name="email" type="email" />
           {errors.email && touched.email ? <div>{errors.email}</div> : null}
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
        </Col>
        <Col sm={6} xs={12}>1 of 2</Col>
      </Row>
    </Container>
  )
}
