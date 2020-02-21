import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { Form } from '@unform/web';
import { Input } from '../../Form';
import './Up.scss';

export default function SignUp() {
  const dispatch = useDispatch();

  function openSignInPage() {
    dispatch({ type: 'SET_PAGETYPE_SAGA', payload: { pageType: 'SignIn' } });
  }

  function handleSubmit(payload) {
    dispatch({ type: 'SIGNUP_SAGA', payload });
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

      <Form onSubmit={handleSubmit}>
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
