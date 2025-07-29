import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const loginUser = async () => {
    try {
      const res = await axios.post(
        "https://login-backend-pcfp.onrender.com/api/auth/login",
        {
          email: email,
          password: password,
        }
      );
      setMsg('✅ Login successful! Token: ' + res.data.token);
    } catch (err) {
      setMsg('❌ Login failed. Invalid credentials.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Login Page</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ display: 'block', margin: '10px 0' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ display: 'block', margin: '10px 0' }}
      />
      <button onClick={loginUser}>Login</button>
      <p>{msg}</p>
    </div>
  );
}

export default Login;
