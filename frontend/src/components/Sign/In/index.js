import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  EuiText,
  EuiPageContentBody,
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiFieldPassword,
  EuiSpacer,
  EuiButton,
} from '@elastic/eui';

import './In.scss';

export default function SignIn() {
  const { softLoading, loginForm: { email, password } } = useSelector((state) => state.base);
  const [form, setForm] = useState({ email, password });
  const dispatch = useDispatch();

  function openSignUpPage() {
    dispatch({ type: 'SET_PAGETYPE_SAGA', payload: { pageType: 'SignUp' } });
  }

  function handleChange(e) {
    const { target: { name, value } } = e;
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit() {
    const copyForm = { ...form };
    const hasInvalidValues = Object.values(copyForm).filter((value) => !value);

    if (hasInvalidValues.length) {
      alert('Any field is not fill');
      return;
    }

    console.log('oi');

    dispatch({ type: 'SIGNIN_SAGA', payload: form });
  }

  return (
    <div className="SignIn">
      <EuiPageContentBody>
        <EuiText size="m"><h1>Log in now</h1></EuiText>
        <EuiText>And have access to your Dashboard and Shornter Management</EuiText>
      </EuiPageContentBody>
      <EuiSpacer />

      <EuiForm>
        <EuiFormRow label="Email Address">
          <EuiFieldText
            value={form.email}
            onChange={handleChange}
            name="email"
          />
        </EuiFormRow>
        <EuiFormRow label="Password">
          <EuiFieldPassword
            value={form.password}
            onChange={handleChange}
            name="password"
          />
        </EuiFormRow>

        <EuiSpacer />

        <button
          onClick={openSignUpPage}
          className="signUpButton"
          type="button"
        >
          Not Registered ? Sign up now
        </button>

        <EuiSpacer />

        <EuiButton
          isLoading={softLoading}
          onClick={handleSubmit}
          iconSide="right"
        >
          Sign In
        </EuiButton>
      </EuiForm>

    </div>
  );
}
