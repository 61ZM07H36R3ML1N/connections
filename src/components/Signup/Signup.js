import { useState } from 'react';
import styles from './styles.module.css';

export const Signup = () => {
  const [email, setEmail] = useState('');

  const [pw, setPW] = useState('');
  const [verifypw, setVerifyPW] = useState('');

  return (
    <div className={StyleSheet.main}>
      <h1>Sign Up</h1>
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
      <input
        type="password"
        value={'Verify Password'}
        placeholder="verify"
        onChange={e => setVerifyPW(e.target.value)}
      />
    </div>
  );
};
