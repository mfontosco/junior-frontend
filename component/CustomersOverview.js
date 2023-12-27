import React from 'react'
import {Flex,Box,Text} from '@chakra-ui/react'
import HomeIcon from './HomeIcon'
import { IoIosArrowForward } from "react-icons/io";
import PropertyCard from './PropertyCard';
import { FaHome } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
const CustomersOverview = () => {
  return (
    <Box p={"4px"} borderRadius={"8px"} boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)" >
    <Flex justifyContent={"space-between"} >
        <Flex alignItems={"center"} gap={"2"}>
        <FaRegUser  size={"20px"}/>

        <Text fontSize={"14px"} fontWeight={"500"} lineHeight={"17.75px"}>Customers Overview</Text>
        </Flex>
        <Flex alignItems={"center"} gap="2">
            <Text fontSize={"12px"} fontWeight={"500"} lineHeight={"15.22px"} color='gray.200'>View all</Text>
            <IoIosArrowForward  color='gray.200'/>
        </Flex>
    </Flex>
      
      <Flex justifyContent={"center"} gap={"4"} mt={"15px"} >
        <PropertyCard amount={"0"} title={"total"}/>
        <PropertyCard amount={"0"} title={"New"}/>
        <PropertyCard amount={"0"} title={"Active"}/>
        <PropertyCard amount={"0"} title={"Inactive"}/>
        </Flex>
       
    </Box>
  )
}

export default CustomersOverview
