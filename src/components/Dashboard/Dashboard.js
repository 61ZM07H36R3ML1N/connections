import { useEffect } from 'react';
import { usePages } from '../../hooks';
import { useAuth } from '../hooks/authUser';

export const Dashboard = () => {
  const { authUser } = useAuth();
  const pages = usePages(authUser?.id);

  useEffect(() => {}, [pages]);
  return <>Dashboard</>;
};
