import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const PropertyCard = ({ amount, title }) => {
  return (
    <Flex
       // Adjust the shadow values
      flexDir="column"
      alignItems="center"
      height="79px"
      width="117px"
      padding="8px"
    >
      <Text>{amount}</Text>
      <Text color="gray">{title}</Text>
    </Flex>
  );
};

export default PropertyCard;
