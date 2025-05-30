

import { useState } from 'react';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      
console.log(email);
console.log(password);
console.log(response);

      if (!response.ok) {
        setError(data.message || 'Login failed');
        return null;
      }

      // Optional: store token in localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);
      localStorage.setItem('username', data.username);

      return data;
    } catch (err) {
      setError('Network error');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useLogin;
