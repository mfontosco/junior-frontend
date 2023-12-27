import React from 'react'
import { Flex,Stack,Box,Text } from '@chakra-ui/react'
import { TbCurrencyNaira } from "react-icons/tb";
const BalanceHeading = ({color,textColor,size}) => {
  return (
    <Flex  p={"10px"} justifyContent={"space-between"}  alignItems={"center"}>
      <Stack>
      <Flex alignItems={"center"}><TbCurrencyNaira color={color} size={size}/> <Text fontWeight="600" fontSize="20px" lineHeight={"25.36px"} color={textColor}>0.00</Text></Flex>
        <Text fontSize={"10px"} fontWeight="500" lineHeight={"12.68px"}>Total Outstanding Balance</Text>
      </Stack>
      <Box>
      <Text fontSize={"12px"} fontWeight={"500"} lineHeight={"15.22px"} color='gray.200'>View all</Text>
      </Box>
    </Flex>
  )
}

export default BalanceHeading
