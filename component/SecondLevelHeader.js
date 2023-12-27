import { Flex } from '@chakra-ui/react'
import React from 'react'
import HomeIcon from './HomeIcon'
import LocationListing from './LocationListing'
import UserIcon from './UserIcon'
import AccountIcon from './AccountIcon'
import RequestIcon from './RequestIcon'
import SettingsIcon from './SettingsIcon'
import SearchInput from './SearchInput'

const SecondLevelHeader = () => {
  return (
    <Flex pt={"10px"} bg={"white"}>
      <HomeIcon size={"20px"} title={"Dashboard"}/>
    <Flex gap={"3"} mr={"35px"}>
    <LocationListing/>
    <UserIcon/>
    <AccountIcon/>
    <RequestIcon/>
    <SettingsIcon/>
    </Flex>
    <SearchInput/>
    </Flex>
  )
}

export default SecondLevelHeader
