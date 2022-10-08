import React from 'react';
import { Text, Button } from '@chakra-ui/react';
import router from 'next/router';
type noAccessProps = {};

const noAccess: React.FC<noAccessProps> = () => {
  const onCLickButton = () => {
    router.push(`/`);
  };
  return (
    <div>
      <Text>No access</Text>
      <Button onClick={onCLickButton}>Go to main page</Button>
    </div>
  );
};
export default noAccess;
