import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  FormLabel,
  Flex,
  Text,
  Divider,
} from '@chakra-ui/react';
import React, { Key, useState } from 'react';
import { BellIcon, AddIcon, DeleteIcon } from '@chakra-ui/icons';

type UsersListProps = {
  id: number;
  email?: string;
  fullName?: string;
  deleteUser: (id: number) => void;
  role?: string;
};

const UsersList: React.FC<UsersListProps> = ({
  email,
  fullName,
  id,
  deleteUser,
  role,
}) => {
  console.log(role, 'role is');
  return (
    <>
      <Flex direction='row' width='100%' justify='space-between'>
        <Flex direction='column'>
          <Text>{fullName}</Text>
          <Text color='grey'>{email}</Text>
        </Flex>
        <Flex align='center'>
          <Text mr='50px'>{role}</Text>
          <Button onClick={() => deleteUser(id)}>
            <DeleteIcon bg='white' p='1px' />
          </Button>
        </Flex>
      </Flex>
      <Divider />
    </>
  );
};
export default UsersList;
