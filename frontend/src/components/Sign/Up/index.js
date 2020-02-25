import React, { useRef } from 'react';
import { Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { Input, Form } from '../../Form';
import schemas, { setErrors } from '../../../config/schemas';
import './Up.scss';

export default function SignUp() {
  const formRef = useRef(null);
  const dispatch = useDispatch();

  function openSignInPage() {
    dispatch({ type: 'SET_PAGETYPE_SAGA', payload: { pageType: 'SignIn' } });
  }

  async function handleSubmit(payload) {
    try {
      await schemas.user.signUp.validate(payload, { abortEarly: false })
      dispatch({ type: 'SIGNUP_SAGA', payload });
    } catch (e) {
      setErrors(e, formRef)
    }
  }

  return (
    <div className="SignUp">
      <h1>Create your account now</h1>
      <p>Get unlimited access for creation of Shortned links with metrics</p>
      <Button
        outline
        color="info"
        onClick={openSignInPage}
        type="button"
      >
        Already Registered ?
      </Button>
      <hr />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="username" label="Full Name" />
        <Input name="organization" label="Organization" />
        <Input name="email" label="Email Address" />
        <Input name="password" label="Password" type="password" />
        <Button
          outline
          type="submit"
          color="primary"
        >
          Register
        </Button>
      </Form>

    </div>
  );
}
