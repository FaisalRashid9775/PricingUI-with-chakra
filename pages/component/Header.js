import React from 'react'
import { Box, Heading ,Text  } from '@chakra-ui/react'


export default function Header() {
  return (
    <div>
      <Box as='section' pb={'112px'}>
        <Box  bg='#6B46C1' color='#F7FAFC' pt={90} pb={198} px={32} textAlign={['left','left','center']} >
            <Heading fontWeight={800} fontSize={['3xl', '3xl', '5xl']}>Simple Prcing for your business</Heading>
            <Text fontWeight={500} fontSize={['lg','lg','2xl']} mt={'16px'}>    Plan that are carefully crafted to suit your business</Text>
        </Box>

      </Box>
    </div>
  )
}
