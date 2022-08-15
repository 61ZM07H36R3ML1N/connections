import styles from './styles.module.css';
import { Signup } from '../Signup';

export const App = () => {
  return (
    <div className={styles.main}>
      Hello Chello
      <Signup />
    </div>
  );
};
