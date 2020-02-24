import React, { useRef, useEffect } from 'react';
import {
  Label, FormFeedback, Input, FormGroup,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

export default function InputField({
  label, name, type, placeholder, className, id = name,
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
    id,
    type,
    error,
    className,
    placeholder,
    defaultValue,
  };

  return (
    <FormGroup className={className}>
      <Label>{label}</Label>
      <Input defaultChecked innerRef={inputRef} invalid={!!error} {...inputProps} />
      <FormFeedback color="danger">{error}</FormFeedback>
    </FormGroup>
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
};

InputField.defaultProps = {
  label: '',
  type: 'text',
  className: '',
  placeholder: '',
};
