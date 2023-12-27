import MainHeader from '@/component/MainHeader'
import ProfileHeader from '@/component/ProfileHeader'
import SalesOverview from '@/component/SalesOverview'
import SecondLevelHeader from '@/component/SecondLevelHeader'
import Image from 'next/image'
import ListingOverview from '@/component/ListingOverview'
import { Box } from '@chakra-ui/react'


export default function Home() {
  return (
    <main >
    <Box bg="#fbfcfc">
    <ProfileHeader/>
    <SecondLevelHeader/>
    <MainHeader/>
    <SalesOverview/>
    <ListingOverview/>
    </Box>
    </main>
  )
}
