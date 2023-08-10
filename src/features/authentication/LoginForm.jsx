import { useState } from 'react'
import Button from '../../ui/Button'
import Form from '../../ui/Form'
import Input from '../../ui/Input'
import FormRowVertical from '../../ui/FormRowVertical'
import { useLogin } from './useLogin.'
import SpinnerMini from '../../ui/SpinnerMini'

function LoginForm() {
  const [email, setEmail] = useState('takagi@example.com')
  const [password, setPassword] = useState('admin123')
  const { login, isLoading } = useLogin()

  function handleSubmit(e) {
    e.preventDefault()
    if (!email || !password) return

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('')
          setPassword('')
        },
      }
    )
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          autoComplete="username"
          disabled={isLoading}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isLoading}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button disabled={isLoading} size="large">
          {!isLoading ? 'Log in' : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  )
}

export default LoginForm
