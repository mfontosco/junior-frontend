import React from 'react'
import { Heading } from '@chakra-ui/react'

const Headin = ({children}) => {
  return (
    <Heading fontSize={"20px"} fontWeight={"600"}>
      {children}
    </Heading>
  )
}

export default Headin
