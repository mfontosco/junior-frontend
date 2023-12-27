import { InputGroup,Input,InputRightElement,Button } from "@chakra-ui/react"
import { IoIosSearch } from "react-icons/io";
function SearchInput() {
   
    const handleClick = () => setShow(!show)
  
    return (
      <InputGroup  w={"400px"}>
        <Input
          pr='4.5rem'
          type={'text' }
          placeholder='Search...properties,customers here'
        />
        <InputRightElement width='4.5rem'>
        <IoIosSearch size={"20px"} />
        </InputRightElement>
      </InputGroup>
    )
  }
  export default SearchInput