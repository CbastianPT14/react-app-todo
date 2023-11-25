import React from 'react';
import { Progress } from '@chakra-ui/react';

const MyComponent = () => {
  return (
    <div>
      <h1>Mi Progreso</h1>
      <Progress value={50} size="md" colorScheme="teal" />
    </div>
  );
};

export default MyComponent;
