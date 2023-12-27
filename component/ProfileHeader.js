import { Flex ,Box } from '@chakra-ui/react'
import React from 'react'
import Header from './Header'
import NewSet from './NewSet'
import ProfileImage from './ProfileImage'

const ProfileHeader = () => {
  return (
    <Box bg="black" px={"20px"} py={"10px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
      <Header/>
      <Flex mr={"20"} gap={"3"}>
      <NewSet/>
      <ProfileImage/>
      </Flex>
    </Box>
  )
}

export default ProfileHeader
