import Image from 'next/image'
import styles from '../../styles/Header.module.scss'
import { Avatar, Button, Flex, Icon, Text } from '@chakra-ui/react';
import { BellIcon, AddIcon, WarningIcon } from '@chakra-ui/icons';
import router from 'next/router';


const Header = ({ logo }): JSX.Element => {
  const onCLickButton = () => {
    router.push(`/`);
  };
  return (
    <div className={styles.header}>
      <div>
        <Flex direction='row' justify='space-between' align='center'>
          <Flex>
            <Image
              src='/logo.svg'
              alt='Logo'
              height='32'
              width='32'
              onClick={onCLickButton}
            />
            <Text color='white'>Org_name / team</Text>
          </Flex>
          <Flex align='center' justify='space-evenly'>
            <Button bg='darkblue' color='white'>
              Create new use Case
            </Button>
            <BellIcon color='white' w={6} h={6} ml='5px' />
            <Avatar w={8} h={8} ml='5px' src={logo} pb='3px' />
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default Header;
