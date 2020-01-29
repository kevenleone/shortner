import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  EuiText,
  EuiIcon,
  EuiPageContentBody,
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiFieldPassword,
  EuiSpacer,
  EuiButton,
} from '@elastic/eui';

import './Up.scss';

export default function SignUp() {
  const [form, setForm] = useState({
    name: '', organization: '', email: '', password: '',
  });


  const dispatch = useDispatch();

  function openSignInPage() {
    dispatch({ type: 'SET_PAGETYPE_SAGA', payload: { pageType: 'SignIn' } });
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

    dispatch({ type: 'SIGNUP_SAGA', payload: form });
  }

  return (
    <div className="SignUp">
      <button
        onClick={openSignInPage}
        className="backButton"
        type="button"
      >
        <EuiIcon type="arrowLeft" />
        <span>Sign In</span>
      </button>
      <EuiPageContentBody>
        <EuiText size="m"><h1>Save your account now</h1></EuiText>
        <EuiText>Get unlimited access for creation of Shortned links with metrics</EuiText>
      </EuiPageContentBody>
      <EuiSpacer />

      <EuiForm>
        <EuiFormRow label="Full Name">
          <EuiFieldText name="name" value={form.name} onChange={handleChange} />
        </EuiFormRow>
        <EuiFormRow label="Organization" helpText="Optional Field, used for team management">
          <EuiFieldText name="organization" value={form.organization} onChange={handleChange} />
        </EuiFormRow>
        <EuiFormRow label="Email Address">
          <EuiFieldText name="email" value={form.email} onChange={handleChange} />
        </EuiFormRow>
        <EuiFormRow label="Password">
          <EuiFieldPassword name="password" value={form.password} onChange={handleChange} />
        </EuiFormRow>
        <EuiButton
          fill
          isLoading={false}
          iconType="save"
          iconSide="right"
          onClick={handleSubmit}
        >
          Register
        </EuiButton>
      </EuiForm>

    </div>
  );
}
