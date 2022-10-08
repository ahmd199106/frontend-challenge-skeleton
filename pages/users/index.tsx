import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Users.module.scss'
import Header from '../../components/shared/Header'
import { useRouter } from 'next/router';
import users from '../../data/users.json';
import AddUserModal from '../../components/AddUserModal';

const Users: NextPage = () => {
  const router = useRouter();
  const { userId } = router.query;
  console.log(userId, 'userID1');
  const userIsAuthenticated = users.users.filter((user) => user.id === userId);
  console.log(!!userIsAuthenticated, 'userIsAuthenticated');

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Team</h1>

          <p>Place your code here</p>
          {userIsAuthenticated && <AddUserModal />}
          {!userIsAuthenticated && router.push(`users/noAccess`)}
        </main>
      </div>
    </div>
  );
};;

export default Users
