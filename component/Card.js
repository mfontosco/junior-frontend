import React from 'react'
import { Box,Flex,HStack, Text,Stack } from '@chakra-ui/react'
import { TbCurrencyNaira } from "react-icons/tb";
import { IoIosArrowDropup } from "react-icons/io";
const Card = ({amount,color,size,textColor,text}) => {
  return (
    <Stack  boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"   w={"50%"} borderRadius={"8px"} py={"5px"} px={"10px"}>
      <Flex alignItems={"center"}><TbCurrencyNaira color={color} size={size}/> <Text fontWeight="600" fontSize="20px" lineHeight={"25.36px"} color={textColor}>{amount}</Text></Flex>
      <Flex alignItems={"center"} gap={"1"}>
        <Text>{text}</Text>
        <IoIosArrowDropup />
        <Text>0%</Text>
      </Flex>
    </Stack>
  )
}

export default Card
