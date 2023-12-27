import { Flex,Box,Text ,Input, HStack,Stack} from '@chakra-ui/react'
import React from 'react'
import Headin from './Heading'

const SalesHeader = () => {
  return (
   <Stack borderBottom={"1px solid gray"}>
     <Flex justifyContent={"space-between"}>
      <Box>
        <Headin mb="9px">Sales Overview</Headin>
        <Text fontSize={"12px"}>Showing Overview Jan 2022 - Sep 2022</Text>
      </Box>
      <Input placeholder='view transaction' w={"200px"} />
    </Flex>
    <Flex justifyContent={"flex-end"}>
        <Box><Text px={"2"}>1 week</Text></Box>
        <Box><Text px={"2"}>1 year</Text></Box>
        <Box><Text px={"2"}>1 month</Text></Box>
    </Flex>
   </Stack>
  )
}

export default SalesHeader
