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
  useToast,
} from '@chakra-ui/react';
import React, { Key, useState } from 'react';
import UsersList from './UsersList';

function AddUserModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formState, setFormState] = useState({
    email: '',
    fullName: '',
  });
  const [userRoleState, setUserRoleState] = useState('Admin');
  const [usersList, setUsersList] = useState<any>([]);
  const toast = useToast();

  const handleClose = () => {
    setModalOpen(false);
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    toast({
      title: 'Account created.',
      description: 'Team Member Added Sucessfully.',
      status: 'success',
      duration: 5000,
      isClosable: true,
      variant: 'left-accent',
      position: 'top',
    });
    setUsersList((prev: any) => {
      return [
        ...prev,
        { id: Math.random(), ...formState, role: userRoleState },
      ];
    });
  };
  console.log(usersList, 'userslist');

  const deleteUser = (id: number) => {
    console.log('delete user');
    setUsersList((prev: any) => {
      return prev.filter((user: { id: number }) => user.id !== id);
    });
    console.log('Id of the user deleted by the Admin', id);
  };
  console.log(usersList, 'users list after filter');

  return (
    <>
      <Flex direction='column' width='400px' height='800px'>
        <Button
          width='300px'
          bg='darkblue'
          color='white'
          onClick={() => setModalOpen(true)}
        >
          Add Team Member
        </Button>
        {/* <Flex direction='column' width='300px' height='300px'> */}
        <Modal isCentered isOpen={modalOpen} onClose={handleClose} size='lg'>
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
            width='100%'
            borderWidth='1px'
          >
            <ModalHeader>Invite Team Members</ModalHeader>
            <ModalCloseButton />
            <ModalBody display='flex' flexDirection='column' width='100%'>
              <form onSubmit={onSubmit}>
                <FormControl width='100%'>
                  <FormLabel>Email Address</FormLabel>
                  <Input
                    width='100%'
                    required
                    id='email'
                    name='email'
                    type='email'
                    placeholder='First name'
                    onChange={onChange}
                    value={formState.email}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Full name</FormLabel>
                  <Input
                    required
                    type='text'
                    name='fullName'
                    id='fullName'
                    placeholder='full name'
                    onChange={onChange}
                    value={formState.fullName}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Select Role</FormLabel>
                  <Flex width='100%' flexGrow={1}>
                    <select
                      onChange={(event) => setUserRoleState(event.target.value)}
                      value={userRoleState}
                    >
                      <option value='Admin'>Admin</option>
                      <option value='Viewer'> Viewer</option>
                    </select>
                  </Flex>
                </FormControl>
              </form>
            </ModalBody>

            <ModalFooter width='100%'>
              <Button
                variant='outline'
                mr={3}
                onClick={handleClose}
                borderColor='blue'
              >
                Cancel
              </Button>
              <Button bg='darkblue' onClick={onSubmit} color='white'>
                Add Team Member
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        {/* </Flex> */}
        <Flex
          borderWidth='1px'
          borderRadius='lg'
          direction='column'
          ml='-300px'
          mr='100px'
          p='15px'
        >
          <Flex width='100%' height='30px' justify='space-between' mb='20px'>
            <Text p='5px'>Team Member</Text>
            <Text p='5px' mr='50px'>
              Role
            </Text>
          </Flex>
          {usersList?.map(
            (item: {
              id: number;
              email: string;
              fullName: string | undefined;
              role: string;
            }) => (
              <UsersList
                key={item.id}
                id={item.id}
                email={item.email}
                fullName={item?.fullName}
                deleteUser={deleteUser}
                role={item.role}
              />
            ),
          )}
        </Flex>
      </Flex>
    </>
  );
}

export default AddUserModal;
