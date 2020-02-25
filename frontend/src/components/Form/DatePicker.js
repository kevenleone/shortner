import React, { useRef, useState, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import { useField } from "@unform/core";
import FormGroup from "./FormGroup";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({ name, label, className, ...rest }) => {
  const datepickerRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [date, setDate] = useState(defaultValue || null);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: "props.selected",
      clearValue: ref => {
        ref.clear();
      }
    });
  }, [fieldName, registerField]);
  return (
    <FormGroup 
      style={{ display: 'flex', flexDirection: 'column' }} 
      className={className} 
      error={error} 
      label={label}
    >
      <ReactDatePicker
        className='form-control'
        dateFormat="dd/MM/yyyy"
        ref={datepickerRef}
        selected={date}
        onChange={setDate}
        {...rest}
      />
    </FormGroup>
  );
};

export default DatePicker;
