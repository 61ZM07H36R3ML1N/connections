import styles from './styles.module.css';
import { fb } from '../../shared/service/firebase';
import { useEffect, useState } from 'react';
import { emailRegex } from '../../shared/service/constants';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [pw, setPW] = useState('');
  const [valid, setValid] = useState('false');
  const [error, setError] = useState('');

  useEffect(() => {
    setValid(email && emailRegex.test(email) && pw);
  }, [email, pw]);

  const Login = () => {
    if (valid) {
      setError('');
      fb.auth
        .signInWithEmailAndPassword(email, pw)
        .then(() => console.log('Login was a Success!'))
        .catch(err => {
          if (err.code === 'auth/invalid-email' || err.code === 'auth/wrong-password') {
            setError('Invalid credentials');
          } else if (err.code === 'auth/user-not-found') {
            setError('No account for this email');
          } else {
            setError('Something went wrong :(');
          }
        });
    }
  };

  return (
    <div className={StyleSheet.main}>
      <h1>Login</h1>

      <input
        type="email"
        value={email}
        placeholder="Email Address"
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={pw}
        placeholder="Password"
        onChange={e => setPW(e.target.value)}
      />

      <button onClick={Login} disabled={!valid}>
        Login
      </button>

      {error && <div className={`error-message ${styles.error}`}>{error}</div>}
    </div>
  );
};
