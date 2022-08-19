import { useState } from 'react';
import styles from './styles.module.css';
import { emailRegex, signupRegex } from '../../shared/service/constants';
import { fb } from '../../shared/service/firebase';

export const Signup = () => {
  const [email, setEmail] = useState('');

  const [pw, setPW] = useState('');
  const [verifyPW, setVerifyPW] = useState('');

  const [valid, setValid] = useState('false');

  useEffect(() => {
    setValid(email && emailRegex.test(email) && pw && verifyPW && pw === verifyPW);
  }, [email, pw, verifyPW]);

  const signup = () => {
    if (valid) {
      fb.auth.createUserWithEmailAndPassword(email, pw).then();
    }
  };

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

      <button onClick={signup} disabled={!valid}>
        Sign Up
      </button>
    </div>
  );
};
