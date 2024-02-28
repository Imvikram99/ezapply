// app/signup/page.jsx
import { useState } from 'react';

export default function Page() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    // API call logic here
    alert(`Signup with username: ${username}, password: ${password}, role: ${role}`);
  }

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Role"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
