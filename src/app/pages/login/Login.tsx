import { useState } from "react"

export const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const handleLogin = () => {
    console.log(email);
  }

  return (
    <div>
      <form>
        <label>
          <span>email</span>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" />
        </label>

        <label>
          <span>senha</span>
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
        </label>
      </form>

      <button onClick={handleLogin} type="button">entrar</button>
    </div>
  )
}