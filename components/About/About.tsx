import { Box, Center, Flex, Stack, Text, Image } from '@chakra-ui/react';
import React from 'react';

type AboutProps = {

};

const About: React.FC<AboutProps> = () => {

    return <div style={{
        marginTop: "0px"
    }}>

        <Center bg="#051411" width={"100%"} color={"white"} height={{ base: "400px", sm:"400px", md: "600px", lg: "700px" }} px={6}>

            <Flex justifyContent={"space-around"}>
                <Stack>
                    <Text fontSize={{ base: "3xl", sm:"3xl", md: "50px", lg: "100px" }}>Hello!</Text>

                    <Flex fontWeight={700} fontSize={{base:'2xl',md: '30px', lg:'40px'}} >

                        <Text> I am </Text>
                        <Text color="brand.100" marginLeft={{base:"1", sm:"1", md: '1' , lg:'3'}}>  Sharayu S</Text>
                    </Flex>

                    <Text>Professional Software Developer</Text>
                </Stack>
                <Box>
                    <Image src="" alt="Sharayu's Photo">

                    </Image>
                </Box>
            </Flex>

        </Center >



    </div >
}
export default About;