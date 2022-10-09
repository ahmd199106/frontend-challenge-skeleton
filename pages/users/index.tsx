import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Users.module.scss'
import Header from '../../components/shared/Header'
import { useRouter } from 'next/router';
import users from '../../data/users.json';
import AddUserModal from '../../components/AddUserModal';
import { Avatar, Button, Flex, Icon, Text } from '@chakra-ui/react';

const Users: NextPage = () => {
  const router = useRouter();
  const { userId } = router.query;
  console.log(userId, 'userID1');
  const userIsAuthenticated = users.users.filter((user) => user.id === userId);
  console.log(!!userIsAuthenticated, 'userIsAuthenticated');
  const logo =
    userId === '1' ? users.users[0].avatarUrl : users.users[1].avatarUrl;
  console.log(logo, 'logo');

  return (
    <div>
      <Header logo={logo} />
      <div className={styles.container}>
        <main className={styles.main}>
          <Text fontSize='30px' fontWeight='bold'>
            Team
          </Text>
          <Flex direction='row' justify='space-between'>
            <Flex flexGrow={1}>
              <Text pt='10px' color='grey'>
                Add Team members and assign organisations
              </Text>
            </Flex>
            {userIsAuthenticated && <AddUserModal />}
          </Flex>

          {!userIsAuthenticated && router.push(`users/noAccess`)}
        </main>
      </div>
    </div>
  );
};;

export default Users
