'use client'
import { ChakraProvider } from '@chakra-ui/react'
// import './globals.css'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
      <ChakraProvider>{children}</ChakraProvider></body>
    </html>
  )
}
