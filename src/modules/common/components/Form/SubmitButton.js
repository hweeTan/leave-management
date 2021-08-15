import { useFormState } from 'react-final-form'

import Button from '../Button'

const SubmitButton = (props) => {
  const { submitting } = useFormState()

  return <Button type='submit' disabled={submitting} {...props} />
}

export default SubmitButton
