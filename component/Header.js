import { Flex,Text } from '@chakra-ui/react'
import logo from "../public/logo.svg"
import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <Flex border="1px solid black" bg="black" flexDir={"column"} alignItems={"center"}>
      <Image src={logo}  alt='profile Header'  bg="transparent" />
      <Text fontSize={"14px"} color={"white"}>For Mainstone</Text>
    </Flex>
  )
}

export default Header
