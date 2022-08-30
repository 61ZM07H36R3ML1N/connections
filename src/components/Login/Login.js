import styles from './styles.module.css';
import { fb } from '../../shared/service/firebase';
import { useEffect, useState } from 'react';
import { emailRegex } from '../../shared/service/constants';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [pw, setPW] = useState('');
  const [valid, setValid] = useState('false');

  useEffect(() => {
    setValid(email && emailRegex.test(email) && pw);
  }, [email, pw]);

  const Login = () => {
    if (valid) {
      fb.auth.signInWithEmailAndPassword(email, pw).then(() => console.log('Login was a Success!'));
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
        Sign Up
      </button>
    </div>
  );
};
