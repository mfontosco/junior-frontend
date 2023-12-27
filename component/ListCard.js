import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import storecamera from '../public/profile1.png';

const ListCard = () => {
  return (
    <Flex>
      <Box
        w="122px"
        height="122px"
        border="1px solid rgba(69, 69, 254, 1)"
        overflow="hidden"
        bg="gray.50"
        borderRadius="8px"
        
      >
        <Image
          src={storecamera}
          alt="storecam"
          width={122}
          height={122}
          layout="responsive"
          objectFit="cover"
          transform="rotate(-45deg)"
        />
      </Box>
    <Box display={"flex"} ml={"4"} alignItems={"center"}>
        <Text>None</Text>
    </Box>
    </Flex>
  );
};

export default ListCard;
