import { useState } from 'react'
import '../styles/index.scss'

const SignUpForm: React.FC = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [agree, setAgree] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!agree) {
      setMessage('You must agree to the terms and conditions')
      return
    }
    try {
      const data = await signup(username, email, password)
      setMessage(data.message)
    } catch (error) {
      console.error('Error during signup:', error)
      setMessage(error.message || 'Error occurred during sign up')
    }
  }

  return (
    <form className="signupForm" onSubmit={handleSubmit}>
      <div className="inputBox topBox">
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="inputBox">
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
      <div className="inputBox">
        <label>
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            required
          />
          I agree to the terms and conditions
        </label>
      </div>
      <button className="button button:hover" type="submit">
        Sign Up
      </button>
      {message && <p>{message}</p>}
    </form>
  )
}

export default SignUpForm
