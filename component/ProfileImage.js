import Image from 'next/image'
import React from 'react'
import profileImage from '../public/profilemix.png'
import { Flex,Text,Box} from '@chakra-ui/react'

const ProfileImage = () => {
  return (
    <Flex gap={"2"}>
           <Box borderRadius={"50%"} bg={"white"}><Image color="black" src={profileImage} layout="fixed" height={40} width={40}  alt='Profile Image'/></Box>
           <Text fontWeight={"500"} fontSize={"16px"} lineHeight={"20.29px"} color={"white"}>Alhmed Ali</Text>
    </Flex>
 
  )
}

export default ProfileImage
