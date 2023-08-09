import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import style from './ContactForm.module.css';

const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const contactNameRegExp =
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(contactNameRegExp, 'Phone number is not valid')
    .required('Contact name   is require'),

  // number: Yup.number()
  //   .typeError("That doesn't look like a phone number")
  //   .positive("A phone number can't start with a minus")
  //   .integer("A phone number can't include a decimal point")
  //   .min(8)
  //   .required('A phone number is required'),

  number: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('A phone number is required'),
});

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  // handleChange = e => {
  //   const { name, value } = e.currentTarget;
  //   this.setState({ [name]: value });
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.onSubmit(this.state);
  //   this.setState({ name: '', number: '' });
  //   // e.currentTarget.reset();
  // };

  render() {
    const nameImputId = nanoid();
    const tellNumberImputId = nanoid();
    const { name, number } = this.state;
    return (
      <>
        <Formik
          initialValues={{
            name: `${name}`,
            number: `${number}`,
          }}
          validationSchema={validationSchema}
          onSubmit={(value, actions) => {
            this.props.onSubmit(value);
            actions.resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form className={style.form}>
              <label htmlFor={nameImputId}>Name</label>
              <Field id={nameImputId} name="name" type="text" />
              {errors.name && <div id="name">{errors.name}</div>}

              <label htmlFor={tellNumberImputId}>Namber</label>
              <Field id={tellNumberImputId} name="number" type="tel" />
              {errors.number && <div id="number">{errors.number}</div>}

              <button type="submit">Add contact</button>
            </Form>
          )}
        </Formik>

        {/* <form className={style.form} onSubmit={this.handleSubmit}>
          <label htmlFor={nameImputId}>Name</label>
          <input
            id={nameImputId}
            value={name}
            type="text"
            name="name"
            // оригинальный паттерн из-за которого ошибка в консоли
            // при дефолтном экспорте ошибки нет
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // новый исправленный паттерн \\
            // pattern="^[a-zA-Zа-яА-Я]+(['\- ][a-zA-Zа-яА-Я ]*[a-zA-Zа-яА-Я])?$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
          <label htmlFor={tellNumberImputId}>Namber</label>
          <input
            id={tellNumberImputId}
            value={number}
            type="tel"
            name="number"
            // оригинальный паттерн из-за которого ошибка в консоли
            // при дефолтном экспорте ошибки нет
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
          <button type="submit">Add contact</button>
        </form> */}
      </>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
