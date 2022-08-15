import { Login, Signup } from '../Signup';
import styles from './styles.modules.css';

export const App = () => {
  return (
    <div className={styles.main}>
      Hello Chello
      <Signup />
    </div>
  );
};
