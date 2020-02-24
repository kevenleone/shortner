import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import Input, { Form } from '../../Form';
import schemas, { setErrors } from '../../../config/schemas';

import './In.scss';

export default function SignIn() {
  const { softLoading } = useSelector((state) => state.base);
  const dispatch = useDispatch();
  const formRef = useRef(null);

  function openSignUpPage() {
    dispatch({ type: 'SET_PAGETYPE_SAGA', payload: { pageType: 'SignUp' } });
  }

  async function handleSubmit(payload) {
    try {
      await schemas.user.signIn.validate(payload, { abortEarly: false });
      dispatch({ type: 'SIGNIN_SAGA', payload });
    } catch (e) {
      setErrors(e, formRef);
    }
  }

  return (
    <div className="SignIn">
      <h1>Log into your Account</h1>

      <hr />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input label="Email Address" name="email" />
        <Input label="Password" name="password" type="password" />

        <Button
          outline
          color="info"
          type="button"
          onClick={openSignUpPage}
        >
          Not Registered ? Sign up now
        </Button>

        <hr />

        <Button
          disabled={softLoading}
          type="submit"
          color="primary"
        >
          Sign In
        </Button>
      </Form>
    </div>
  );
}
