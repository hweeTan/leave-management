import { useField } from 'react-final-form'

const Input = ({ name, ...restProps }) => {
  const { input } = useField(name, restProps)

  return <input {...input} />
}

export default Input
