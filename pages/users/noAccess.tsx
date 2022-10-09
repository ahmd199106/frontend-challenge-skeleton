import React from 'react';
import { Text, Button } from '@chakra-ui/react';
import router from 'next/router';
import Header from '../../components/shared/Header';
import styles from '../../styles/Home.module.css';
import users from '../../data/users.json';

type noAccessProps = {};

const noAccess: React.FC<noAccessProps> = () => {
  const logo = users.users[1].avatarUrl;

  const onCLickButton = () => {
    router.push(`/`);
  };
  return (
    <div className={styles.container}>
      <Header logo={logo} />
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Text>No access</Text>
          <Button onClick={onCLickButton}>Go to main page</Button>
        </h1>
      </main>
    </div>
  );
};
export default noAccess;
