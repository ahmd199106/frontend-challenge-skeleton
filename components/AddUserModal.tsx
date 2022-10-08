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
import UsersList from './UsersList';

function AddUserModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formState, setFormState] = useState({
    email: '',
    fullName: '',
  });
  const [usersList, setUsersList] = useState<any>([]);

  const handleClose = () => {
    setModalOpen(false);
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('onchange');
    setFormState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    console.log(formState);
    setUsersList((prev: any) => {
      //   console.log(prev, 'prev');
      //   console.log([...prev], '...prev');
      //   console.log([...prev, formState], '...prev,formsate');
      return [...prev, { id: Math.random(), ...formState }];
    });
  };
  console.log(usersList, 'userslist');

  const deleteUser = (id: number) => {
    console.log('delete user');
    setUsersList((prev: any) => {
      return prev.filter((user: { id: number }) => user.id !== id);
    });
    console.log('yo', id);
  };
  console.log(usersList, 'users list after filter');

  return (
    <Flex direction='column' width='400px' height='400px'>
      <Flex direction='column' width='300px' height='300px'>
        <Button onClick={() => setModalOpen(true)}>Add new user</Button>
        <Modal isCentered isOpen={modalOpen} onClose={handleClose} size='xs'>
          <ModalOverlay
            bg='none'
            backdropFilter='auto'
            backdropInvert='80%'
            backdropBlur='2px'
          />
          <ModalContent
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
          >
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
            >
              <form onSubmit={onSubmit}>
                <FormControl>
                  <FormLabel>Email Address</FormLabel>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='First name'
                    onChange={onChange}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Full name</FormLabel>
                  <Input
                    type='text'
                    name='fullName'
                    id='fullName'
                    placeholder='full name'
                    onChange={onChange}
                  />
                </FormControl>
              </form>
            </ModalBody>

            <ModalFooter>
              <Button variant='ghost' mr={3} onClick={handleClose}>
                Cancel
              </Button>
              <Button colorScheme='blue' onClick={onSubmit}>
                Add Team Member
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
      {usersList?.map(
        (item: { id: number; email: string; fullName: string | undefined }) => (
          <UsersList
            key={item.id}
            id={item.id}
            email={item.email}
            fullName={item?.fullName}
            deleteUser={deleteUser}
          />
        ),
      )}
    </Flex>
  );
}

export default AddUserModal;
