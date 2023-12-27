import React from 'react'
import { GoGear } from "react-icons/go";
import { Flex,Text } from '@chakra-ui/react';
const SettingsIcon = () => {
  return (
    
     <Flex px={"4"} alignItems={"center"} gap={"2"}>
       <GoGear />
        <Text>Settings</Text>
    </Flex>
  )
}

export default SettingsIcon
