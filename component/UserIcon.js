import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { Flex,Text } from '@chakra-ui/react';
const UserIcon = () => {
  return (
  
     <Flex px={"4"} alignItems={"center"} gap={"2"}>
        <FaRegUser />
        <Text>Users</Text>
    </Flex>
  )
}

export default UserIcon
