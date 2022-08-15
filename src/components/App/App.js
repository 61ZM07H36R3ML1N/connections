import { Login } from '../Login';
import styles from './styles.modules.css';

export const App = () => {
  return (
    <div className={styles.main}>
      Hello Chello
      <Login />
    </div>
  );
};
