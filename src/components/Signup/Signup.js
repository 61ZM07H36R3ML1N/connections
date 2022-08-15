import { useState } from 'react';
import styles from './styles.module.css';

export const Signup = () => {
  const [email, setEmail] = useState('');

  const [pw, setPW] = useState('');
  const [verifypw, setVerifyPW] = useState('');

  return (
    <div className={StyleSheet.main}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" value={pw} onChange={e => setPW(e.target.value)} />
      <input type="password" value={verifypw} onChange={e => setVerifyPW(e.target.value)} />
    </div>
  );
};
