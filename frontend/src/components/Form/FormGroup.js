import React from 'react'
import { Label, FormFeedback, FormGroup } from 'reactstrap';

export default function FormG({className, style, error, label, children}) {
  return (
    <FormGroup style={style} className={className}>
      <Label>{label}</Label>
       { children }
      <FormFeedback color="danger">{error}</FormFeedback>
    </FormGroup>
  )
}
