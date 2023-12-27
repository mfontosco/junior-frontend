import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import ListCard from './ListCard'
import WatchListCard from './WatchListCard'
import BalanceHeading from './BalanceHeading'

const ListingOverview = () => {
    return (
        <Flex px="40px">
            <Box bg={"white"}  h={"300px"} w="40%">
                <Heading fontSize={"18px"} fontWeight={"600"} lineHeight={"22.82px"}>Listing Overview</Heading>
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Text fontSize={"10px"} fontWeight="400" lineHeight="12.68px">Most Viewed</Text>
                    <Text fontSize={"10px"} fontWeight="400" lineHeight="12.68px">Most Shared</Text>
                </Flex>
                <Flex justifyContent={"space-between"} >
                <ListCard />
                <ListCard />
               
                </Flex>
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Box>
                <Text fontSize={"10px"} fontWeight="400" lineHeight="12.68px">Most WatchListed</Text>
                <ListCard />
                </Box>
                <WatchListCard/>
               
                </Flex>
            </Box>
            <Box border={"1px solid gray"} h={"300px"} w={"30%"}>
                <BalanceHeading/>
            </Box>
            <Box border={"1px solid gray"} h={"300px"} w={"30%"}>

            </Box>
        </Flex>
    )
}

export default ListingOverview
