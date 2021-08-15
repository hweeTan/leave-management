import React from 'react'
import styled from 'styled-components'
import { useField } from 'react-final-form'

import { typography, colors } from '../../utils/styles'
import Label from './Label'
import Field, { FieldWrapper } from './Field'
import Error from './Error'

const StyledRadio = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;

  ~ span {
    display: flex;
    width: 1.25rem;
    height: 1.25rem;
    border: 1.5px ${({ hasError }) => (hasError ? colors.red : colors.gray1)}
      solid;
    margin: 0.125rem 0.625rem 0.125rem 0.125rem;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
  }

  :checked ~ span:before {
    content: '';
    display: block;
    width: 0.75rem;
    height: 0.75rem;
    position: absolute;
    border-radius: 50%;
    background-color: ${colors.gray1};
  }
`
const StyledLabel = styled.label`
  display: inline-flex;
  align-items: center;
  ${typography.size.small}
  color: ${colors.gray1};

  :not(:last-child) {
    margin-right: 1.5rem;
  }
`

const Radio = ({ label, ...restProps }) => (
  <Field {...restProps}>
    {({ input, meta }) => (
      <StyledLabel>
        <StyledRadio hasError={meta.touched && meta.error} {...input} />
        <span />
        {label}
      </StyledLabel>
    )}
  </Field>
)

const RadioGroup = ({ name, label, children, required, ...restProps }) => {
  const { meta } = useField(name)

  return (
    <FieldWrapper {...restProps}>
      {!!label && (
        <Label htmlFor={name}>
          {label}
          {!required && ' (Optional)'}
        </Label>
      )}
      <div style={{ position: 'relative' }}>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            ...child.props,
            name,
            type: 'radio',
            required,
          }),
        )}
      </div>
      {meta.error && meta.touched && <Error>{meta.error}</Error>}
    </FieldWrapper>
  )
}

export { Radio }

export default RadioGroup
