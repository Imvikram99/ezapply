"use client";
import { useState } from 'react';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

    // Function to handle form submission
    async function handleSubmit(e) {
      e.preventDefault(); // Prevent default form submission behavior
  
      // POST request to the backend
      try {
        const response = await fetch('http://localhost:8085/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
            role,
          }),
        });
        
  
        const data = await response.json();
  
        // Handle response data
        console.log(data);
        alert(data.message); // Display success message
      } catch (error) {
        console.error('Registration failed:', error);
        alert('Registration failed. Please try again.');
      }
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
