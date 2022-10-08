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
} from '@chakra-ui/react';
import React, { Key, useState } from 'react';

type UsersListProps = {
  id: number;
  email?: string;
  fullName?: string;
  deleteUser: (id: number) => void;
};

const UsersList: React.FC<UsersListProps> = ({
  email,
  fullName,
  id,
  deleteUser,
}) => {
  return (
    <Flex direction='column'>
      <Text>{email}</Text>
      <Text>{fullName}</Text>
      <Button onClick={() => deleteUser(id)}>delete user</Button>
    </Flex>
  );
};
export default UsersList;
