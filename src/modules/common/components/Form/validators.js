export const composeValidators = (...validators) => (value, allValues) =>
  validators.reduce((error, validator) => error || validator(value, allValues), undefined)

export const isRequired = (value) => {
  const trimmedValue = typeof value === 'string' ? value?.trim() : value

  if (!trimmedValue && trimmedValue !== 0) {
    return 'Please complete this field.'
  }

  return undefined
}

export const hasMoreCharactersThan = (comparable) => (value) => {
  if (value?.length < comparable) {
    return `Please input more than ${comparable} characters.`
  }

  return undefined
}
