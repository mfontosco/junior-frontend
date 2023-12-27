import React from 'react'
import { MdOutlineAccountBalanceWallet } from "react-icons/md"
import { Flex,Text } from '@chakra-ui/react'
const AccountIcon = () => {
  return (

         <Flex px={"4"} alignItems={"center"} gap={"2"}>
            <MdOutlineAccountBalanceWallet />
        <Text>Account</Text>
    </Flex>
  )
}

export default AccountIcon
