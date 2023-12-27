import { HStack,Box,Flex } from '@chakra-ui/react'
import React from 'react'
import SalesHeader from './Sales'
import SalesChart from './SalesChart'
import Card from './Card'
import PropertyHeader from './PropertyHeader'
import PropertyCard from './PropertyCard'
import CustomersOverview from './CustomersOverview'

const SalesOverview = () => {
  return (
    <Box  px={"40px"} display={"flex"}>
      <Box w="60%" bg={"white"} h={"auto"} p={"6px"}  borderRadius="md">
        <SalesHeader/>
        <Flex mt={"6px"}>
            <Box flex={"1"}></Box>
            <Box flex={"1"}>
                <Flex gap={"4"}>
                <Card  text={"Balance"} size={"20px"} amount={"0.00"}/>
                <Card  text={"Desposit"} size={"20px"} amount={"0.00"}/>
                </Flex>
                <Flex gap={"4"} mt={"4"}>
                <Card  text={"Purchase"} size={"20px"} amount={"0.00"}/>
                <Card  text={"Withdrawal"} size={"20px"} amount={"0.00"}/>
                </Flex>
            </Box>
        </Flex>
      </Box>
      <Box bg={"white"} w="40%" p={"6px"} h={""}  borderRadius="md">
        <PropertyHeader/>
       <CustomersOverview/>
      </Box>
    </Box>
  )
}

export default SalesOverview
