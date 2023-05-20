import React from 'react';
import { Box, Center, Flex, Stack, Text, Image, Grid, GridItem, Divider, Container } from '@chakra-ui/react';
import Skills from './Skills';


const AboutDetails: React.FC = () => {

    return (
        <Grid templateColumns={{
            base: 'repeat(1, 1fr)',
            lg: 'repeat(2, 1fr)'
        }} gap={6} bg="black" width={"100%"} color={"white"} height={{ sm: "100%", md: "100%", lg: "800px" }} justifyContent={"space-around"} py="5vw" px="5vw">

            <GridItem align={"center"}>
                Image
            </GridItem>
            <GridItem >
                <Stack mx={"20px"} width={{md:"300px", lg:"600px"}} >
                    
                    <Text fontSize={['', '20px', '30px', '40px']} color={"brand.100"} fontWeight={700} align={{ sm: "center", md: "left" }}>About Me</Text>
                    <Text>Hi!

                        I am a passionate blockchain and front-end developer, creating innovative and user-friendly web applications. I have a strong background in Solidity, Ethereum, Web3.js, ReactJS, NextJS, and JavaScript, as well as a keen interest in emerging technologies and trends in the decentralized space.

                    </Text>
                    
                    <Text color={"brand.100"} fontWeight={700} align={{ sm: "center", md: "left" }} paddingTop={7}>Skills</Text>
                    
                    <Skills/>
                </Stack>
            </GridItem>
        </Grid>
    )
}
export default AboutDetails;