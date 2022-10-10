import Image from 'next/image'
import styles from '../../styles/Header.module.scss'
import { Avatar, Button, Flex, Icon, Text } from '@chakra-ui/react';
import { BellIcon, AddIcon, WarningIcon } from '@chakra-ui/icons';
import router from 'next/router';
import { useContext } from 'react';
import ModalContext from '../modal-context';

// TODO add the modal intoo the navbar and use react context to open or close the modal and close
// supply the provider function to open the modal or close the odal to buttons whrever 
// required(be it the navbar or be it a button on the autenticated users page ) and toggle the modal open or close 
// wherveer required in the app, hence mimicing the same use of Recoil but using React context
const Header = ({ logo }): JSX.Element => {
  const modalCtx = useContext(ModalContext);
  console.log(modalCtx, 'Modalcontext');

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
