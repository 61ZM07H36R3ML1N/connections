import styles from '../Signup/styles.module.css';
import { Login } from '../Login';

export const App = () => {
  return (
    <div className={styles.main}>
      <Login />
    </div>
  );
};
