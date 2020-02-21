import React, { useRef, useEffect } from 'react';
import {
  Label, FormGroup,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

export default function InputField({
  label, name, type, placeholder,
}) {
  const inputRef = useRef(null);
  const {
    fieldName, registerField, defaultValue, error,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const inputProps = {
    type,
    error,
    placeholder,
    defaultValue,
  };

  return (
    <FormGroup>
      <Label>{label}</Label>
      <input className="form-control" ref={inputRef} {...inputProps} />
    </FormGroup>
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
};

InputField.defaultProps = {
  label: '',
  type: 'text',
  placeholder: '',
};
