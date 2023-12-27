import React from 'react'
import { RxCalendar } from "react-icons/rx";
import {Flex,Text} from "@chakra-ui/react"

const RequestIcon = ({size,color}) => {
  return (
   
     <Flex px={"4"} alignItems={"center"} gap={"2"}>
         <RxCalendar size={size} color={color} />
        <Text>Request</Text>
    </Flex>
  )
}

export default RequestIcon
