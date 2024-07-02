import { useState } from 'react'
import '../styles/index.scss'

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      const data = await login(email, password)
      setMessage(data.message)
    } catch (error) {
      console.error('Login error:', error)
      setMessage('Error occurred during login')
    }
  }

  return (
    <form className="signupForm" onSubmit={handleSubmit}>
      <div className="inputBox topBox">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="inputBox">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className="button button:hover" type="submit">
        Log In
      </button>
      {message && <p>{message}</p>}
    </form>
  )
}

export default LoginForm
