import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { BsTruckFront } from "react-icons/bs";
const WatchListCard = () => {
  return (
    <Flex h={"68px"} p={"10px"} w={"189px"}  boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)" >
      <Stack>
        <Text fontSize={"24px"} lineHeight={"30.43px"} fontWeight={"400"}>0</Text>
        <Text fontSize={"10px"} fontWeight="500" lineHeight={"12.68px"}>Number of watchlists</Text>
      </Stack>
      <Box>
      <BsTruckFront />
      </Box>
    </Flex>
  )
}

export default WatchListCard
