import { useEffect } from 'react';
import { usePages } from '../../hooks';
import { useAuth } from '../hooks/authUser';
import styles from './styles.module.css';

export const Dashboard = () => {
  const { authUser } = useAuth();
  const pages = usePages(authUser?.id);

  useEffect(() => {}, [pages]);
  return (
    <div className={styles.main}>
      <h1>Pages: </h1>
      {pages.map((p, index) => {
        return <div key={index}>{p.name}</div>;
      })}
    </div>
  );
};
