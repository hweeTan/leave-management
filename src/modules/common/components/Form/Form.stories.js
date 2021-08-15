import React from 'react'
import { FormSpy } from 'react-final-form'

import GlobalStyle from '../GlobalStyle'
import { colors } from '../../utils/styles'
import { Search } from '../Icons'
import Form from './Form'
import { hasMoreCharactersThan } from './validators'

export default {
  title: 'Example/Form',
  component: Form,
}

const Template = () => (
  <>
    <GlobalStyle />
    <div style={{ width: 300 }}>
      <Form onSubmit={() => alert('submit')}>
        <FormSpy>{(props) => <p>{JSON.stringify(props.values)}</p>}</FormSpy>
        <Form.Input
          label='Full Name'
          name='fullName'
          placeholder='John Doe'
          required
        />

        <Form.Input
          label='Search'
          name='search'
          icon={<Search color={colors.gray1} />}
          validate={[hasMoreCharactersThan(15)]}
        />

        <Form.RadioGroup label='Resolution' name='resolution' required>
          <Form.Radio value='accepted' label='Accept' />
          <Form.Radio value='rejected' label='Reject' />
        </Form.RadioGroup>

        <Form.SubmitButton label='Submit' />
      </Form>
    </div>
  </>
)

export const Default = Template.bind({})
