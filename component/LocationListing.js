import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { Flex,Text } from '@chakra-ui/react';
const LocationListing = () => {
  return (
    <Flex alignItems={"center"} gap={"2"}>
        <CiLocationOn />
        <Text>Listing</Text>
    </Flex>
    
  )
}

export default LocationListing
