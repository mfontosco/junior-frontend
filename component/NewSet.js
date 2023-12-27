import React from 'react'
import AddIcon from './AddIcon'
import CalendarIcon from './CalendarIcon'
import { Flex,Box } from '@chakra-ui/react'
import NotificationIcon from './NotificationIcon'

const NewSet = () => {
  return (
    <Flex  gap={"5"} mr={"4"}>
      <Flex px={"1"} borderRadius={"2"} h={"32px"} justifyContent={"center"} alignItems={"center"} bg={"white"}><AddIcon size={"32px"} color={""}/></Flex>
      <CalendarIcon size={"32px"} color={"white"}/>
      <NotificationIcon size={"32px"} color={"white"}/>
    </Flex>
  )
}

export default NewSet
