import { Box,Text } from '@chakra-ui/react'
import React from 'react'

const MainHeader = () => {
  return (
    <Box px={"40px"} mb={"10px"}>
      <Text fontSize={"20px"} lineHeight={"25.36px"} fontWeight={"600"}>Hi Ahmed</Text>
      <Text fontSize={"xs"}>Welcome to your Dashboard</Text>
    </Box>
  )
}

export default MainHeader
