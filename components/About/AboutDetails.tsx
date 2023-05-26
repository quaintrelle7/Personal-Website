import React from 'react';
import { Box, Center, Flex, Stack, Text, Image, Grid, GridItem, Divider, Container } from '@chakra-ui/react';
import Skills from './Skills';


const AboutDetails: React.FC = () => {

    return (
        <Grid id="AboutDetails" templateColumns={{
            base: 'repeat(1, 1fr)',
            lg: 'repeat(2, 1fr)'
        }} gap={6} bg="black" width={"100%"} color={"white"} height={{ sm: "100%", md: "100%", lg: "730px" }} justifyContent={"space-around"} px="5vw" py={{ base: "15vw", lg: "5vw" }}>

            <Flex mt={100}  display={{ base: "none", lg:"block"}} justifyItems={"center"}>
                <Image width={"600px"} borderRadius={10} src="https://images.unsplash.com/photo-1555066931-bf19f8fd1085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt ="laptop image"></Image>
            </Flex>

            <GridItem >
                <Stack mx={"20px"} width={{ lg: "600px" }} alignContent={"center"}>

                    <Box>

                        <Text fontSize={['2xl', '30px', '30px', '30px']} color={"brand.100"} fontWeight={700} align={{ sm: "center", base: "center", md: "center", lg: "left" }} py={6}>About Me</Text>
                        <Text>Hi!

                            I am a passionate blockchain and front-end developer, creating innovative and user-friendly web applications. I have a strong background in Solidity, Ethereum, Web3.js, ReactJS, NextJS, and JavaScript, as well as a keen interest in emerging technologies and trends in the decentralized space.

                        </Text>

                        <Text fontSize={['2xl', '30px', '30px', '30px']} color={"brand.100"} fontWeight={700} align={{ sm: "center", base: "center", md: "center", lg: "left" }} paddingTop={7}>Skills</Text>

                        <Skills />
                    </Box>
                </Stack>
            </GridItem>
        </Grid>
    )
}
export default AboutDetails;