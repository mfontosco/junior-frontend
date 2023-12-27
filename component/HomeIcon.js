import React from 'react'
import { FaHome } from "react-icons/fa";
import {Flex, Text} from '@chakra-ui/react'
const HomeIcon = ({size,color,title}) => {
  return (
    <Flex alignItems={"center"} gap={"2"} px={"40px"}>
      <FaHome size={size} color={color}/>
      <Text>{title}</Text>
    </Flex>
  )
}

export default HomeIcon
