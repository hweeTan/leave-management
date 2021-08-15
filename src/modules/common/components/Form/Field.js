import { useField } from 'react-final-form'
import styled from 'styled-components'

import Label from './Label'
import Error from './Error'
import { isRequired, composeValidators } from './validators'

const FieldWrapper = styled.div`
  margin-bottom: 1rem;
`

const Field = ({
  name,
  placeholder,
  label,
  icon,
  style,
  required,
  children,
  type,
  validate = [],
  ...restProps
}) => {
  const { input, meta } = useField(name, {
    ...restProps,
    type,
    validate: required
      ? composeValidators(isRequired, ...validate)
      : composeValidators(...validate),
  })

  if (type === 'radio' || type === 'checkbox') {
    return <>{children({ input, meta })}</>
  }

  return (
    <FieldWrapper style={style}>
      {!!label && (
        <Label htmlFor={name}>
          {label}
          {!required && ' (Optional)'}
        </Label>
      )}
      {children({ input, meta })}
      {meta.error && meta.touched && <Error>{meta.error}</Error>}
    </FieldWrapper>
  )
}

export { FieldWrapper }

export default Field
